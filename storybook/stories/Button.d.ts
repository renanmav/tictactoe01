// This file exists for two purposes:
// 1. Ensure that both ios and android files present identical types to importers.
// 2. Allow consumers to import the module as if typescript understood react-native suffixes.
import DefaultIos from './Button.ios';
import * as ios from './Button.ios';
import DefaultAndroid from './Button.android';
import * as android from './Button.android';

declare var _test: typeof ios;
declare var _test: typeof android;

declare var _testDefault: typeof DefaultIos;
declare var _testDefault: typeof DefaultAndroid;

export * from './Button.ios';
export default DefaultIos;
