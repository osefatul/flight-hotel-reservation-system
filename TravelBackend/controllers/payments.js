const stripe = require("stripe")(process.env.SECRET_KEY)



const StripePayment = async (req, res, next) => {

    const domainUrl = process.env.DOMAIN_URL;
    const {line_items} = req.body;

    if(!line_items) {
        return res.status(400).json({error: "missing required session parameters"});
    }

    try {
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: 'payment',
        line_items,
        success_url: `${domainUrl}checkout-success`,
        cancel_url: `${domainUrl}payments`,
        shipping_address_collection: {allowed_countries: ['US', "GB", "CA"]},
        shipping_options: [
            {
            shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
                amount: 0,
                currency: "usd",
            },
            display_name: "Free shipping",
            // Delivers between 5-7 business days
            delivery_estimate: {
                minimum: {
                unit: "business_day",
                value: 5,
                },
                maximum: {
                unit: "business_day",
                value: 7,
                },
            },
            },
        },
        {
            shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
                amount: 1500,
                currency: "usd",
            },
            display_name: "Next day air",
            // Delivers in exactly 1 business day
            delivery_estimate: {
                minimum: {
                unit: "business_day",
                value: 1,
                },
                maximum: {
                unit: "business_day",
                value: 1,
                },
            },
            },
        },
        ],

        phone_number_collection: {
            enabled: true,
        },

        });

        res.status(200).json({url:session.url  });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message});
    }


}

module.exports = {
    StripePayment
}