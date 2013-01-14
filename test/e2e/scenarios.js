'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('angularjsTestApp', function() {
  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  describe('Home', function() {
    // Test de la page home => / | verif URL
    it('should load page Home {/}', function() {
      expect(browser().location().url()).toBe("/");
    });


    // Test de click sur les boutons
    it('should be able to click on [Sign up]', function(){
      element('button', '#btn-subscribe').click();
      expect(browser().location().url()).toBe("/subscribe");
    });

  });

  describe('Subscribe', function() {
    // Relocate to subscribe
    beforeEach(function() {
      browser().navigateTo('#/subscribe');
    });

    // Test de la page home => / | verif URL
    it('should load page subscribe {/subscribe}', function() {
      expect(browser().location().url()).toBe("/subscribe");
    });

    it('should have 3 inputs', function(){
      expect(element('input').count()).toEqual(3);
    });
  });

  describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
 
      scope = $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));
  });
  
});