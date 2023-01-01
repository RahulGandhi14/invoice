import moonIcon from '../../assets/icon-moon.svg'
import sunIcon from '../../assets/icon-sun.svg'

export interface themeType {
    theme: {
        color: {
            body: {
                bg: string
            }
            sidebar: {
                bg: string
            }
            form: {
                bg: string
                fieldBg: string
                fieldBorder: string
            }
            btn: {
                primary: {
                    bg: string
                    hover: string
                    text: string
                }
                secondary: {
                    bg: string
                    hover: string
                    text: string
                }
                tertiary: {
                    bg: string
                    hover: string
                    text: string
                }
                danger: {
                    bg: string
                    hover: string
                    text: string
                }
            }
            invoiceItem: {
                bg: string
                shadow: string
                hash: string
            }
            invoiceStatus: {
                bg: string
                text: string
            }
            invoiceTable: {
                bg: string
                footerBg: string
            }
            popup: {
                bg: string
            }
            dropdown: {
                bg: string
                shadow: string
            }
            checkbox: {
                bg: string
            }
            text: {
                heading: string
                bodyA: string
                bodyB: string
                formLabel: string
                formText: string
                link: string
                linkHover: string
                placeholder: string
            }
        }
        icon: { src: any; alt: string }
    }
}

export const light = {
    color: {
        body: {
            bg: '#f8f8fb',
        },
        sidebar: {
            bg: '#373b53',
        },
        form: {
            bg: '#ffffff',
            fieldBg: '#ffffff',
            fieldBorder: '#DFE3FA',
        },
        btn: {
            primary: { bg: '#7c5dfa', text: '#ffffff', hover: '#9277ff' },
            secondary: {
                bg: '#f9fafe',
                hover: '#dfe3fa',
                text: '#7e88c3',
            },
            tertiary: {
                bg: '#363b53',
                hover: '#0c0e16',
                text: '#888eb0',
            },
            danger: {
                bg: '#EC5757',
                hover: '#FF9797',
                text: '#ffffff',
            },
        },
        invoiceItem: {
            bg: '#ffffff',
            shadow: 'rgba(72, 84, 159, 0.100397)',
            hash: '#7e88c3',
        },
        invoiceStatus: {
            bg: 'rgba(55, 59, 83, 0.06)',
            text: '#373B53',
        },
        invoiceTable: {
            bg: '#f9fafe',
            footerBg: '#373b53',
        },
        popup: {
            bg: '#ffffff',
        },
        dropdown: {
            bg: '#ffffff',
            shadow: 'rgba(72, 84, 159, 0.25)',
        },
        checkbox: {
            bg: '#dfe3fa',
        },
        text: {
            heading: '#0C0E16',
            bodyA: '#888eb0',
            bodyB: '#858BB2',
            formLabel: '#7E88C3',
            formText: '#0C0E16',
            link: '#0c0e16',
            linkHover: '#7e88c3',
            placeholder: 'rgba(12, 14, 22, .4)',
        },
    },
    icon: { src: moonIcon, alt: 'Moon Icon' },
}

export const dark = {
    color: {
        body: {
            bg: '#141625',
        },
        sidebar: {
            bg: '#1e2139',
        },
        form: {
            bg: '#141625',
            fieldBg: '#1e2139',
            fieldBorder: '#252945',
        },
        btn: {
            primary: { bg: '#8a6dfd', text: '#ffffff', hover: '#9277ff' },
            secondary: {
                bg: '#252945',
                hover: '#ffffff',
                text: '#dfe3fa',
            },
            tertiary: {
                bg: '#363b53',
                hover: '#1e2139',
                text: '#dfe3fa',
            },
            danger: {
                bg: '#EC5757',
                hover: '#FF9797',
                text: '#ffffff',
            },
        },
        invoiceItem: {
            bg: '#1e2139',
            shadow: 'rgba(72, 84, 159, 0.100397)',
            hash: '#7e88c3',
        },
        invoiceStatus: {
            bg: 'rgba(223, 227, 250, .06)',
            text: '#dfe3fa',
        },
        invoiceTable: {
            bg: '#252945',
            footerBg: '#0C0e16',
        },
        popup: {
            bg: '#1e2139',
        },
        dropdown: {
            bg: '#252945',
            shadow: 'rgba(0, 0, 0, 0.25)',
        },
        checkbox: {
            bg: '#1e2139',
        },
        text: {
            heading: '#ffffff',
            bodyA: '#dfe3Fa',
            bodyB: '#ffffff',
            formLabel: '#dfe3fa',
            formText: '#ffffff',
            link: '#ffffff',
            linkHover: '#888eb0',
            placeholder: '#fff',
        },
    },
    icon: { src: sunIcon, alt: 'Sun Icon' },
}
