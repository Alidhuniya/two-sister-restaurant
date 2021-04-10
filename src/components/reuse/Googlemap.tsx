import React from 'react'
import "./../../sass/2-components/_googlemap.scss";

export const Googlemap = () => {
    return (
        <div className="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.939556485354!2d83.4511734148967!3d27.502255182877345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969a3aa78b243b%3A0x2fce084a36f4afb1!2sHaat%20Bazar%20Rd%2C%20Siddharthanagar%2032900!5e0!3m2!1sen!2snp!4v1618091968470!5m2!1sen!2snp" width="640" height="300"></iframe>
</div>
    )
}