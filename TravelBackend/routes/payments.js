const router = require("express").Router();
const Stripe = require("stripe")(process.env.SECRET_KEY)


router.post("/", async(req, res)=>{
    let status

    const {token, amount} = req.body;
    try {
        await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
        });
    status = 'success';
    res.status(200).json({status });
    } catch (error) {
    console.log(error);
    status = 'Failure';
    res.status(500).json({ error });
    }
})


module.exports = router