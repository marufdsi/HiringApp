// UI-Router states
app.states = {
    'index': {
        url: '/', 
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@index': {
                templateUrl: 'templates/common/headerNav.html'
            },
            'content@index': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    },
    'jobs': {
        url: '/jobs',
        authRequired: true,
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@jobs': {
                templateUrl: 'templates/common/headerNav.html'
            },            
            'content@jobs': {
                templateUrl: 'templates/jobs/jobs.html',
                controller: 'jobsCtrl',
                resolve: {
                    jobs: function(jobsService){                          
                        return jobsService.load();
                    }
                }
            }
        }
    },
    'job': {
        url: '/job/:jobID',
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@job': {
                templateUrl: 'templates/common/headerNav.html'
            },
            'content@job': {
                templateUrl: 'templates/jobs/job.html',
                controller: 'jobCtrl'
            },
            'sidebar@job': {
                templateUrl: 'templates/sidebar/jobSidebar.html',
                controller: 'sidebarCtrl',
                resolve: {
                    jobs: function(jobsService){                        
                        return jobsService.load();
                    }
                }
            }
        }
    },
    'questionnaires': {
        url: '/job/:jobID/questionnaires',
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@questionnaires': {
                templateUrl: 'templates/common/headerNav.html'
            },
            'content@questionnaires': {
                templateUrl: 'templates/questionnaires/questionnaires.html',
                controller: 'questionnairesCtrl'
            }
        }
    },
    'candidates': {
        url: '/candidates',
        authRequired: true,
        views: {
            '': { 
                templateUrl: 'templates/layout/main.html' 
            },
            'header@candidates': {
                templateUrl: 'templates/common/headerNav.html'
            },
            'content@candidates': {
                templateUrl: 'templates/candidates/candidates.html',
                controller: 'candidatesCtrl',
                resolve: {
                    candidatesResolve: function( candidatesService ){                                                
                        return candidatesService.load();                        
                    }
                }
            }
        }
    }
};