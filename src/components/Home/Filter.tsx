import styled from 'styled-components'
import { fontStyle1 } from '../styled/Typography'
import { themeType } from '../styled/Theme'
import downArrow from '../../assets/icon-arrow-down.svg'
import { useState } from 'react'
import CheckBox from '../styled/CheckBox'

const Wrapper = styled.div`
    position: relative;
`

const P = styled.div`
    ${fontStyle1}
    font-weight: 700;
    color: ${({ theme }: themeType) => theme.color.text.heading};
    cursor: pointer;

    & span {
        display: inline-block;
        margin-left: 0.5rem;
    }

    & span img {
        transition: transform 0.3s ease-out;
    }

    .active {
        transform: rotate(180deg);
    }
`

const DropDown = styled.div`
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: ${({ theme }: themeType) =>
        `0px 10px 20px ${theme.color.dropdown.shadow}`};
    background-color: ${({ theme }: themeType) => theme.color.dropdown.bg};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 12rem;
    transition: background-color 0.3s, box-shadow: 0.3s;
`

const dropdownList = ['Paid', 'Pending', 'Draft']

const Filter = () => {
    const [openDropDown, setOpenDropDown] = useState(false)

    return (
        <Wrapper>
            <P onClick={() => setOpenDropDown((prevState) => !prevState)}>
                Filter by status{' '}
                <span>
                    <img
                        src={downArrow}
                        alt="DownArrow"
                        className={openDropDown && 'active'}
                    />
                </span>
            </P>
            {openDropDown && (
                <DropDown>
                    {dropdownList.map((listItem) => (
                        <CheckBox key={listItem} label={listItem} />
                    ))}
                </DropDown>
            )}
        </Wrapper>
    )
}

export default Filter
