// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
import '/imports/startup/client';
import '/imports/startup/both';

import '/imports/ui/js/swiper.min.js';
import '/imports/ui/js/jquery.min.js';
// import '/imports/ui/js/custom.js';
// import '/imports/ui/js/jquery.js';
import '/imports/ui/js/icheck.js';
import '/imports/ui/js/ionrangeslider.js';
// import '/imports/ui/js/jqzoom.js';
// import '/imports/ui/js/magnific.js';
import '/imports/ui/js/owl-carousel.js';
// Global Component
import '/imports/ui/stylesheets/Customize/swiper.min.css';
import '/imports/ui/stylesheets/Customize/style.css';
import '/imports/ui/stylesheets/Customize/styles.css';
import '/imports/ui/stylesheets/Customize/slider.css';

// Global Namespace
import '/imports/ui/stylesheets/Component/alerts.css';
import '/imports/ui/stylesheets/Component/buttons.css';
import '/imports/ui/stylesheets/Component/forms.css';
import '/imports/ui/stylesheets/Component/nav.css';
import '/imports/ui/stylesheets/Component/table.css';
import '/imports/ui/stylesheets/Component/layout.css';
import '/imports/ui/stylesheets/Component/list.css';

// @import "{}/imports/ui/stylesheets/base.less";
// @import '{}/imports/ui/stylesheets/icon.less';
// @import '{}/imports/ui/stylesheets/link.less';
// @import '{}/imports/ui/stylesheets/menu.less';

// Global Modules
import '/imports/ui/stylesheets/Modules/aside.css';
import '/imports/ui/stylesheets/Modules/footer.css';
import '/imports/ui/stylesheets/Modules/header.css';

