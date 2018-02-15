'use strict';

var expect = require('chai').expect;

/* db */
var db = require('../db')

/* models */
var User = require('../db/models/user');

describe('User Model', function () {

    var new_user = {
        first_name: 'foo',
        last_name: 'bar',
        username: 'foobar',
        email: 'foo@gmail.com',
        password: '12345',
        isAdmin: true
    }

    describe('#save', function () {
        beforeEach(function (done) {
            User.remove(function (err) {
                if (err) {
                    return done(err)
                } else {
                    done()
                }
            });
        });

        it('should save without error', function (done) {
            var user = new User(new_user);
            user.save(function (err, user) {
                if (err) {
                    done(err);
                } else {
                    expect(user.first_name).to.equal('foo')
                    done();
                }
            })
        })
    })

    // it('expect return foo', function (done) {
    //     var user = new User({first_name: new_user.first_name});
    //     user.save(function (err, user) {
    //         if (err) {
    //             done(err);
    //         } else {
    //             expect(user.first_name).to.equal('foo')
    //             done();
    //         }
    //     })
    // })

    // it('expect return firt name cantor be blank', function (done) {
    //     var user = new User({first_name: new_user.first_name});
    //     user.build(function (err, user) {
    //         if (err) {
    //             done(err);
    //         } else {
    //             expect(user.first_name).to.not(null)
    //             done();
    //         }
    //     })
    // })

})