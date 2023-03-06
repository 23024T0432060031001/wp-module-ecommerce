<?php
namespace NewfoldLabs\WP\Module\ECommerce\Data;
  /**
 * Contains Brand information.
 */
final class Brands {
	/**
	 * Brand specific data - Bluehost, Bluhost India
	 *
	 * @return array
	 */
	public static function get_brands() {

		return array(
			'crazy-domains'       => array(
				'brand'                       => 'crazy-domains',
				'name'                        => 'CrazyDomains',
				'url'                         => 'https://crazydomains.com',
				'hireExpertsInfo'   => 'admin.php?page=crazy-domains#/marketplace/services/blue-sky',
				'adminPage'         => 'admin.php?page=crazy-domains',
				'setup'                => array(
					'payment'   => 'Paypal',
					'shipping'  => 'Shippo',
				),
				'defaultContact'       => array(
					'woocommerce_default_country'   => 'AU:NSW',
					'woocommerce_currency'          => 'AUD',
				),
			),
			'bluehost'       => array(
				'brand'                       => 'bluehost',
				'name'                        => 'Bluehost',
				'url'                         => 'https://bluehost.com',
				'hireExpertsInfo'   => 'admin.php?page=bluehost#/marketplace/services/blue-sky',
				'adminPage'         => 'admin.php?page=bluehost',
				'setup'                => array(
					'payment'   => 'Paypal',
					'shipping'  => 'Shippo',
				),
				'defaultContact'       => array(
					'woocommerce_default_country'   => 'US:AZ',
					'woocommerce_currency'          => 'USD',
				),
			),
			'bluehost-india' => array(
				'brand'                       => 'bluehost-india',
				'name'                        => 'Bluehost',
				'url'                         => 'https://bluehost.in',
				'hireExpertsInfo'   => '',
				'adminPage'         => 'admin.php?page=bluehost',
				'setup'                => array(
					'payment'   => 'Razorpay',
					'shipping'  => 'None',
				),
				'defaultContact'       => array(
					'woocommerce_default_country'   => 'IN:AP',
					'woocommerce_currency'          => 'INR',
				),
			),
		);
	}
}
