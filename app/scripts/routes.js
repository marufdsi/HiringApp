// UI-Router states
app.states = {
    'index': {
        url: '/',        
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@index': {
                templateUrl: 'templates/headerNav.html'
            },
            'content@index': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    },
    'jobs': {
        url: '/jobs',        
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@jobs': {
                templateUrl: 'templates/headerNav.html'
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
                templateUrl: 'templates/headerNav.html'
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
    'questionnaries': {
        url: '/job/:jobID/questionnaries',
        views: {
            '': {                
                templateUrl: 'templates/layout/main.html'
            },
            'header@questionnaries': {
                templateUrl: 'templates/headerNav.html'
            },
            'content@questionnaries': {
                templateUrl: 'templates/questionnaires/questionnaires.html',
                controller: 'questionnairesCtrl'
            }
        }
    },
};