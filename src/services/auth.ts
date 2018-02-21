import * as passport from 'passport';
import {Strategy as FacebookStrategy} from 'passport-facebook';
import {configServer} from '../config/config_server';

export function initPassport(){
  return passport.use(new FacebookStrategy(
    {
      clientID: configServer.FACEBOOK_APP_ID,
      clientSecret: configServer.FACEBOOK_APP_SECRET,
      callbackURL: "/api/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function(accessToken, refreshToken, profile, cb) {
      /*User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
      });
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      return;
      */
    }
  ));
}