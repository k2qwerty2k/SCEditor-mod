/**
 * @mod by Pavel Sochelnikov https://4pda.to/forum/index.php?showuser=1277
 */
'use strict';
export default function(sceditor) {
	sceditor.locale['en-GB'] = {
		'Font Color': 'Font Colour',
		'Center': 'Centre',
		dateFormat: 'day/month/year'
	};

	// set this as the default English locale
	sceditor.locale['en'] = sceditor.locale['en-GB'];
}
