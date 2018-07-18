import React from 'react'
import Layout from '../components/layout'

const Contact = () => (
    <Layout>
        <div className="main-content container">
            <h1>Contact Us</h1>
            <p>If you have any questions or comments relating to Sunrich products, please contact our U.S. office.   </p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Product Information</th>
                        <td>info@sunrichtechnology.com</td>
                    </tr>
                    <tr>
                        <th>OEM Sales and Pricing</th>
                        <td>sales@sunrichtechnology.com</td>
                    </tr>
                    <tr>
                        <th>Technical Support</th>
                        <td>support@sunrichtechnology.com</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <p>For general questions, call us at 408&#8209;588&#8209;1288.</p>
        </div>
    </Layout>
)

export default Contact