# Prefs WebIntent & Preferentiallity #

This project defines a Prefs WebIntent, and a baseline implementation *Preferentiallity*.  Based around an Android `PreferencesFragment`[1], the Prefs specification enables web applications to delegate settings selection to a common UI, and returns to the application a SharedPreference response.  This is desirable because:

- Allows the user to select a User Agent for the Intent to their liking
- Exposes a common UI across webapps
- Frees developers and extension writers from having to design settings GUIs
- Delegates a non-trivial problem to a dedicated piece of code
- Provides a machine-to-machine communication mechanism

Currently a single PreferenceScreen is the only input accepted by Preferentiallity.  Resources are not handled from external files, but are to be defined as inline children to their dependents.

At present, Preferentiallity leaves storage up to the application; the Prefs WebIntent is set up only to provide a response for any given PreferenceScreen.  Ideally, an Intent will be developed to provide long term management of SharedPreferences, and to handle default values and changes.  This would suggest some kind of asynchronous system, whereby a manager could notify a page that a SharedPreferences it had registered interest in had changed; the WebIntents spec seems more oriented towards providing one-way on-demand external services, versus this subscription-based use case of a service notifying a servicee. 

[1] http://developer.android.com/reference/android/preference/PreferenceFragment.html

# Demoing #

- visit `http://schema.eldergods.com/prefs/preferentiallity.html` to install and see a demo page.
- visit `http://schema.eldergods.com/prefs/v1.0.html` to install the Preferentiallity WebIntent.

# Using the Intent #

- Target the action `http://schema.eldergods.com/prefs/v1.0` to build your own WebIntent clients and services.

# Building the Service #

- `npm install` to fetch dependencies
- `npm start` to compile the `templates` folder into the `templates.js` file
- `v1.0.html` now has everything it needs to run.
