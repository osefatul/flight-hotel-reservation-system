const router = require("express").Router();
const stripe = require("stripe")(process.env.SECRET_KEY)


router.post("/", async(req, res)=>{

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
        success_url: `${domainUrl}?success=true`,
        cancel_url: `${domainUrl}?canceled=true`,
        shipping_address_collection: {allowed_countries: ['US', "GB", "CA"]}
        });

        res.status(200).json({sessionsId:session.id  });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message});
    }
})


module.exports = router