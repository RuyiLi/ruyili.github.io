import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedinIn, faYoutube);

dom.i2svg({
	callback: function () {
		console.log('Finished rendering icons');
	}
});