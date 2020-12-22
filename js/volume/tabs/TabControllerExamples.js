'use strict';

define([
        'tabcontrollerbase'
    ],
    function (TabControllerBase ) {
        function TabControllerExamples(container, workspace, views) {
            var description = 'Examples of visualization';
            var title = 'Examples';
            TabControllerBase.call(this, container, title, description, workspace);

            const wwwUrl = document.location.origin + '/';
            var items = [
                {
                    name: 'Demo NRRD Data',
                    files: [ 'data/ili.csv', 'data/seed.nrrd'],
                    prefix: wwwUrl
                }
            ];

            this.addHintBlock('Select any of the examples below');
            items.forEach(function (item) {
                item[item.name] = workspace.download.bind(workspace, item.files, item.prefix);
                this.addAction(item.name, item[item.name]);
            }.bind(this));

            return this;
        }

        TabControllerExamples.prototype = Object.create(TabControllerBase.prototype);

        return TabControllerExamples;
    });
