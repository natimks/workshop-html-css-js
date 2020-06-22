const OFFERS = [
  {
    companyLogo: '../images/crefisa-logo.svg',
    companyName: 'Crefisa',
    discount: 60,
    originalValue: 'R$ 6.600,00',
    discountedValue: 'R$ 600,00',
    tags: [
      {
        label: 'Dívida negativada',
        type: 'debt'
      },
      {
        label: 'Dívida em seu CPF',
        type: 'info'
      }
    ],
    details: [
      {
        label: 'Valor negativado',
        value: 'R$ 1.000,00'
      },
      {
        label: 'Quando venceu',
        value: '01/03/2019'
      },
      {
        label: 'Código do contrato',
        value: '12312.233.2222.1.3123123123.0000'
      }
    ]
  },
  {
    companyLogo: '../images/lno-logo.svg',
    companyName: 'Limpa Nome',
    discount: 20,
    originalValue: 'R$ 2.100,00',
    discountedValue: 'R$ 1.680,00',
    tags: [
      {
        label: 'Dívida negativada',
        type: 'debt'
      },
    ],
    details: [
      {
        label: 'Valor negativado',
        value: 'R$ 2.000,00'
      },
      {
        label: 'Quando venceu',
        value: '22/01/2018'
      }
    ]
  },
  {
    companyLogo: '../images/lno-logo.svg',
    companyName: 'Serasa',
    discount: 80,
    originalValue: 'R$ 5.000,00',
    discountedValue: 'R$ 400,00',
    tags: [
      {
        label: 'Dívida em análise',
        type: 'info'
      },
      {
        label: 'Dívida em seu CPF',
        type: 'debt'
      }
    ],
    details: [
      {
        label: 'Valor negativado',
        value: 'R$ 6.000,00'
      },
      {
        label: 'Quando venceu',
        value: '01/01/2000'
      },
      {
        label: 'Limite para pagamento',
        value: '20/12/2021'
      }
    ]
  }
]

export default OFFERS