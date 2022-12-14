import passport from 'passport';

import { findById } from '../service/lawyer.service';
import LawyerType from '../types/lawyer';


export default () => {

  passport.serializeUser((user: LawyerType, done) => {
    process.nextTick(function() {
      return done(null, user.id);
    });
  });

  passport.deserializeUser(async (id: number, done) => {
    await findById(id)
      .then((user: LawyerType | any) => { done(null, user); })
      .catch((err) => { done(err, null); });
  });

};

