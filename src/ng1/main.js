/*
 * ========================================================================
 *
 * Copyright (c) 2016-2017 Unpublished Work of NetIQ Corporation. All Rights Reserved.
 *
 * THIS WORK IS AN UNPUBLISHED WORK AND CONTAINS CONFIDENTIAL,
 * PROPRIETARY AND TRADE SECRET INFORMATION OF NETIQ. ACCESS TO
 * THIS WORK IS RESTRICTED TO (I) NETIQ EMPLOYEES WHO HAVE A NEED
 * TO KNOW HOW TO PERFORM TASKS WITHIN THE SCOPE OF THEIR ASSIGNMENTS AND
 * (II) ENTITIES OTHER THAN NETIQ WHO HAVE ENTERED INTO
 * APPROPRIATE LICENSE AGREEMENTS. NO PART OF THIS WORK MAY BE USED,
 * PRACTICED, PERFORMED, COPIED, DISTRIBUTED, REVISED, MODIFIED,
 * TRANSLATED, ABRIDGED, CONDENSED, EXPANDED, COLLECTED, COMPILED,
 * LINKED, RECAST, TRANSFORMED OR ADAPTED WITHOUT THE PRIOR WRITTEN
 * CONSENT OF NETIQ. ANY USE OR EXPLOITATION OF THIS WORK WITHOUT
 * AUTHORIZATION COULD SUBJECT THE PERPETRATOR TO CRIMINAL AND CIVIL
 * LIABILITY.
 *
 * ========================================================================
 */
'use strict';

/*
 * This file serves as our main Angular module
 */

var app = angular.module('cxApp', [
    'ngRoute'
]);


// important note: if you wish to refresh the page when clicking on the nav link
// on the same page you are already on, you MUST add a trailing slash in the route provider when clause,
// otherwise the page will not refresh
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/groups', {
        controller: 'groups',
        templateUrl: 'ng1/views/groups.html'
    }).
    when('/users', {
        controller: 'users',
        templateUrl: 'ng1/views/users.html'
    }).  
    when('/ng5-demo', {
      template: '<ng5-demo></ng5-demo>' // Angular component
    }).               
    otherwise({
        redirectTo: '/',
        controller: 'users',
        templateUrl: 'ng1/views/users.html'
    });
}]);

app.filter('sanitize', ['$sce', function($sce) {
    return function(htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };
}]);