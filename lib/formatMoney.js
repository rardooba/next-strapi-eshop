const formatMoney = (amount = 0) => {
    const options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }

    //24.99 if 2400 % 100 = 0 => 24
    if(amount % 100 === 0) {
        options.minimumFractionDigits = 0
    }

    const formatter = Intl.NumberFormat('en-Us', options)
    return formatter.format(amount / 100)
};

export default formatMoney;