=== Open Links in SL ===
Contributors: coderocketstudios
Donate link: https://coderocket.studio/second-life/
Tags: second life, slurl, virtual world
Requires at least: 5.0
Tested up to: 6.4.3
Stable tag: 0.10
Requires PHP: 7.0
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Have your links to Second Life&copy; locations, groups, and profiles open in SL from your website. Simply activate plugin to use. Your SL links will open inside your viewer on click.

== Description ==

Have your links to Second Life&copy; locations, groups, and profiles open in SL from your website.

This plugin is intended as an aid for websites which are created and managed by Second Life&copy; residents. There are many websites like this, and often these community owners run into confusion on how to link their website content (text, images, etc) to the relevant content inside the Second Life&copy; virtual world.


== How to use ==

Simply activate plugin to use. Your published website links to `maps.secondlife.com` plus `world.secondlife.com` will automatically open inside of your Second Life&copy; viewer on click. 

= Example =

When you open a profile window in Second Life, you can find the user's key and also "copy URI". You will then get something like this:

`secondlife:///app/agent/63c3809f-6fe2-4151-aa8d-ab3ce169f01a/about`

Take the key such as `63c3809f-6fe2-4151-aa8d-ab3ce169f01a` and put it in this format instead to make a link to it from the web:

`http://world.secondlife.com/resident/63c3809f-6fe2-4151-aa8d-ab3ce169f01a`

Example URL to a location within Second Life:
`http://maps.secondlife.com/secondlife/Serena%20Pisces/213/132/23`

Example URL to a group within Second Life:
`https://world.secondlife.com/group/d7a76a13-68d0-553f-76b3-851a9a07919f`

**You still need to make sure these links are set up correctly on your website.** In the future this plugin may be released with helper tools to create these links properly, but this is not yet a feature.


== Frequently Asked Questions ==

= How do I get a Second Life&copy; viewer? =

[Second Life&copy; Viewer Download](https://secondlife.com/support/downloads/)

= How do I properly talk about Second Life&copy; on my website? =

[The Second Life&copy; Brand Center](https://secondlife.com/corporate/brand/index.php)

= Does this work for other virtual worlds? =

No.


== Changelog ==

= 0.8 =
* Changed script to allow standard URL get requests, such as `?lang=` at the end of the URL.
* Added encoding to the resulting link for extra security.

= 0.7 =
* Minor changes to plugin info pages.

= 0.6 =
* Working release in beta.
* Tested on a few SL community-run websites.
