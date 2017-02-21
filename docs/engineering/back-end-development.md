# Backend Development


## Table of Contents

* [General Principles](#general-principles)
* [Coding Standards](#coding-standards)
	- [Drupal specific-coding](#coding-standards)
* [Debugging](#debugging)
* [Git Commits](#git-commits)
* [Editor Configuration](#editor-configuration)
* [Code Examples](#code-examples)
	- [Don't use continue in short loops](#continue)
	- [Simplify Boolean Logic](#boolean)


## <a name="general-principles"></a>General Principles
* We use the correct layer of abstraction.
* We write clean, simple code and explain our purpose with comments. 
* We contribute back everything we can, because it supports us, our clients and the community.
* We manage patches in a standard way so that we can know if code/contrib has been changed, how and why. Every change should be contributed back, and the patch name should include the drupal.org issue NID.
* We write [secure code](https://www.drupal.org/docs/7/security/writing-secure-code/overview)
* We write code that anticipates change, so that we can implement (most) changes in an easy and agile way 
* We write API layer that doesn't assume a particular UI, so that the API could be used in multiple (and unpredictable) situations (For example, used in these UIs: Web site, drush, rest, SMS)
* We remove dead code, because it's dead (and because it's confusing to leave it).
* We treat one as a special case of many, so that the logic is in one place and we don't have to maintain it in two places. 
	- When writing getter functions, consider handling the logic in the many only. A get_one can call the get_many.
* Use doxygen commenting standards on the top of your functions.
* We include implementation notes and end-user documentation in our tickets.



## <a name="coding-standards"></a>Coding Standards

* We follow [established best practices](https://www.drupal.org/docs/develop/standards) so we can easily work with each others code, and contribute back
	- This includes Drupal [PHP](https://drupal.org/coding-standards), [CSS](https://drupal.org/node/1886770) and [JS](https://www.drupal.org/node/172169) coding standards
* Use [Coder module](https://www.drupal.org/project/coder) to ensure code meets Drupal standards
* Use proper spacing (2 space indent - no tabs)
* Don't hard code
* We stand behind the YAGNI (You ain't gonna need it) philosophy and avoid "gold plating"
	- When writing code, our code should solve ONLY and EXACTLY the use case that we are trying to support. In many instances we have a desired to make things MORE FLEXIBLE for the FUTURE but that is code we will have to support without knowing whether any of those use cases will ever come up.

	Another big reason for wanting to be FLEXIBLE is that refactoring is hard, and it feels easier to have flexibility at front, but that is why we write automated tests, so refactoring will not be as painful.


### <a name="drupal-specific-coding"></a>Drupal-specific coding
* We use namespaces so that we avoid namespace collisions
	- All module functions (even little helper functions) should have the module prefix
	- Database tables should have the module prefix
	- Variables should have the module prefix
	- Custom code, when possible, should be developed as a standalone library that a module can include and integrate with Drupal. This should mean using class namespaces and best OOP practices, and at that point we can use an alternative more flexible autoloading approach, like the one provided by composer.
* Always try and use Drupal functions where they exist. This helps with upgrades (among other things).
	- Use drupal_get_path(); to create a path to a file in your module directory.
	- Use path_to_theme(); to create a path to a file in the current theme directory.
* Use the theme system! When theming, don't hack module code, where it is possible to use a theme function instead.
	- The corollary: when coding modules keep all markup in theme functions!
* We use render arrays and theme functions, so we can separate logic and presentation. 
* Try and keep modules that could be useful on another site completely generic from the start (a good technique is to develop in a fresh Drupal install rather then the actual site), and theme the site specific stuff in your site theme.
* Use contrib modules (or write one of your own!)
* The Most Important Decision In Developing A Drupal Site: Contributed Vs. Custom Development: When writing code, try to think about abstracting functionality where appropriate. This helps make it easier for us to contribute back to the larger community and also lets us recycle our work on different projects. Keep an eye to the horizon!

* Any site text longer than a line or two should be put in a settings field (or, at the least, a variable).
* For shorter strings make sure all text is run through the t() function, and then use locale.module to 'translate' it if changes are needed. Locale module is also useful for keeping contrib modules (image, location etc) as 'pristine' as possible, which makes upgrading easier.
* We use variable_get() for text or settings that may change, so that these can be easily changed without needing to push a release
* When we get WSOD, we check logs for answers:
	- vim /var/log/httpd/[log_name].php
	- vim /var/log/httpd/[log_name]_error
	- vim /var/log/httpd/[log_name]_access
	- or vim /var/log/apache/[log_name].php
	- Your log could be in var/log/apache /var/log/apache2, /var/log/httpd

## <a name="debugging"></a>Debugging

* When debugging, we double check for false positives. We alway cross check a positive result in case that positive result is the ONLY result, instead of one of many possible results.
* We validate assumptions, so that we work on the right thing.
	- Am I assuming this is a back-end issue?
	- Am I assuming this is a front-end issue?
	- Am I assuming this is a issue with a specific module?
* We use browser like Chrome dev console or Firebug tools to identify JS and server issues so that we don't miss issues between the browser and Drupal
* When debugging, for every half hour we spend working on a bug, we spend 15 minutes making it faster to test/debug so that we can learn faster, and test hypothesis faster.
	- Writing a drush script to call the buggy code
	- Reduce the data set to make imports/processing faster
	- Make a Selenium/Behat script to complete some complex process
	- Fire up xdebug and step through the code
	- Removing code/modules to reduce the set of possible issues
	- Build a simplified test case
	- Move the site or database to tmpfs so a process runs faster
	- Use drush ws --tail --full
* When adding debug code, we left justify it so it will fail code style validation before getting committed to the repository.

## <a name="git-commits"></a>Git Commits
* Put descriptive text in the commit log
* Begin the commit log test with the ticket number, e.g., #123 (Trac and Trello), GN-123 (JIRA).


## <a name="editor-configuration"></a>Editor Configuration

* TAB_WIDTH = 8 // the default for most editors and printers - this is the displayed width of tabs, but is irrelevant as there shouldn't be any actual tabs!
* TAB_KEY_INSERTS_INDENT_WIDTH_SPACES = true
* INDENT_WIDTH = 2 // the default for Drupal code - i.e. pressing the tab key inserts two actual spaces, instead of a tab.
* To configure:
	- [vim](https://www.drupal.org/node/29325)
	- [Sublime](https://www.drupal.org/node/1346890)
	- [NetBeans](https://www.drupal.org/node/1019816)
	- [Eclipse](https://www.drupal.org/node/75242)
	- [Emacs](https://www.drupal.org/node/2327299)

## <a name="code-examples"></a>Code Examples

```
/**
 * @file mpeg.c
 * MPEG codec.
 * @author ...
 */

/**
 * Summary sentence.
 * more text ...
 * ...
 * @param my_parameter description of my_parameter
 * @return return value description
 * @TODO these are some things that we need to do
 */
function myfunc($my_parameter) {    // no space before '('; 1 space before '{'
  if ($my_parameter) {   // there is a space after 'if', 'while' and other conditionals
    do_something();
  }                      // close brackets under the opening code line, alone (unless commented)
  else {                 // the else looks prety lonely, but it helps indenting rules like this
    do_something_else();
  }
  print 'done';          // when possible, align comments (makes them easier to separate from code)
}
```

### <a name="continue"></a>Don't use continue in short loops

Don't do this:

``` foreach ($types as $type) {
    if ($type == 'blog_post') {
      continue;
    }
    print $type;
  } ```

Instead do this:

```
foreach ($types as $type) {
    if ($type != 'blog_post') {
      print $type;
    }
  }
```

### <a name="boolean"></a>Simplify Boolean Logic

When the conditional has two values, here's a quick hint on boolean logic.
These are equivalences:
```!(a && b) == (!a || !b)
!(a || b) == (!a && !b)
So if your conditional was
if ($type != 'blog_post' && $user->uid != $node->uid) {
    continue;
  }
  // do something ...```

Then you can simplify this as:
```if ($type == 'blog_post' || $user->uid == $node->uid) {
    // do something ...
  }```

