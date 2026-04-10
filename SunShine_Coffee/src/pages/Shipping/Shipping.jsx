import React from 'react'
import s from './Shipping.module.scss'

export const Shipping = () => {
  return (
    <section className={s.shippingStyle}>
        <h2>Shipping Policy</h2>

<h3><strong>1. Processing Time</strong></h3>
<p>Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.
During peak periods or special promotions, processing times may extend slightly, but we’ll keep you 
informed of any changes.</p>
<h3><strong>2. Shipping Rates and Delivery Times</strong></h3>
<p>Standard Shipping (3-7 business days): Free for orders over $50. A flat rate of $5.99 applies for
   orders under $50.
Express Shipping (1-3 business days): Available at a flat rate of $15.99.
International Shipping: Currently, we ship only within Denmark, UK. For international inquiries, please contact our customer service.
Note: Delivery times are estimates and start from the shipping date, not the order date.</p>

<h3><strong>3. Order Tracking</strong></h3>
<p>Once your order has shipped, you will receive a confirmation email with tracking information. You 
  can monitor your delivery progress via the carrier’s website.</p>
<h3><strong>4. Damaged, Lost, or Delayed Orders</strong></h3>
<p>If your order arrives damaged, please contact us within 48 hours with photos and a description of the issue.
For lost or delayed orders, reach out to us as soon as possible, and we’ll work with our carriers 
to resolve the issue promptly.</p>
<h3><strong>5. Shipping Restrictions</strong></h3>
Please ensure that your delivery address is correct, as we are not responsible for orders shipped to incorrect addresses. Orders returned due to an incorrect address may incur additional reshipping charges.
<h3><strong>6. Contact Us</strong></h3>
<p>For any questions about your order or our shipping process, feel free to contact us at coffeeland@info.com or Phone Number:22331122. Our customer service team is here to assist you.
</p>
    </section>
  )
}
