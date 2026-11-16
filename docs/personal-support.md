# Personal support page

Local route: `/support`. A FIB-only page with an app link, receiving QR and
copyable code. Supporters choose their amount in FIB, subject to bank limits.
There is no FastPay, amount form, simulated success screen or payment backend.

Receiving code: `PJ6E6SOM846G` (letter O). The QR asset encodes that exact payload,
extracted from the supplied FIB Deposit screenshot. It was regenerated locally
with CoreImage and decoded with Vision to verify the payload roundtrip.

App link: https://p.fib.iq/rlpG/onlinePayment?identifier=PJ6E6SOM846G

This URL was constructed, not issued by FIB. The owner reported a broken
transaction after opening it. The page explicitly describes that limitation.
Neither this link nor acceptance of the Deposit QR for person-to-person
transfers is verified. A valid FIB-issued receiving/payment link should replace
it when available. Do not treat launching the app as a valid payment request.

The page cannot create requests, confirm payments or store donations. Supporters
must check the recipient and amount in FIB before confirming. Automatic payment
confirmation would require a supported server-side provider integration.

Use the existing portfolio build/preview commands. Changes remain local;
no publishing or hosting changes are included.
