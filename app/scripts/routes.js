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
                templateUrl: 'templates/login.html'
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
                controller: 'sidebarCtrl'
            }
        }
    },
};