const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Beige",
    "Pink",
    "Green",
    "Yellow",
]

const filters = [
    {
        id:"color",
        name:"Color",
        options:[
            {value:"White", label:"White"},
            {value:"Beige", label:"Beige"},
            {value:"Blue", label:"Blue"},
            {value:"Brown", label:"Brown"},
            {value:"Green", label:"Green"},
            {value:"Purple", label:"Purple"},
            {value:"Yellow", label:"Yellow"},
        ]
    },

    {
        id:"size",
        name:"Size",
        options:[
            {value: "S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"},
        ]
    }
];

 const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399", label:"₹159 To ₹399"},
            {value:"399-999", label:"₹399 To ₹999"},
            {value:"999-1999", label:"₹999 To ₹1999"},
            {value:"1999-2999", label:"₹1999 To ₹2999"},
            {value:"3999-4999", label:"₹3999 To ₹4999"},
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {
                value:"10",
                label:"10% and Above",
            },
            {value:"20", label:"20% and Above"},
            {value:"30", label:"30% and Above"},
            {value:"40", label:"40% and Above"},
            {value:"50", label:"50% and Above"},
            {value:"60", label:"60% and Above"},
            {value:"70", label:"70% and Above"},
            {value:"80", label:"80% and Above"},

        ]
    },
    {
        id:"availability",
        name:"Avalablity",
        options:[
            {value:"In Stock", label:"In Stock"},
            {value:"Out Of Stock", label:"Out Of Stock"},

        ]
    }
]

export  {color, filters, singleFilter}