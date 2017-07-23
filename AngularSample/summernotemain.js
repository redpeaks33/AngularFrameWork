  angular.module('summernoteDemo', ['summernote'])
      .controller('OptCtrl', function($scope) {
          $scope.options = {
              height: 150,
              toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']]
              ]
          };
      })
      .controller('AirmodeCtrl', function($scope) {
          $scope.text = "<h3>This is an Air-mode editable area.</h3>";
          $scope.options = {
              popover: {
                  image: [
                    ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
                    ['float', ['floatLeft', 'floatRight', 'floatNone']],
                    ['remove', ['removeMedia']]
                  ],
                  link: [
                    ['link', ['linkDialogShow', 'unlink']]
                  ],
                  air: [
                    ['color', ['color']],
                    ['font', ['bold', 'underline', 'clear']],
                    ['para', ['ul', 'paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture']]
                  ]
              }
          };
          $scope.mediaDelete = function(target) {
              console.log('media is delted:', target);
          }
      })
      .controller('CodeCtrl', function($scope) {
          $scope.text = "Hello World";
      })
      .controller('CallbacksCtrl', function($scope) {
          $scope.init = function() { console.log('Summernote is launched'); };
          $scope.enter = function() { console.log('Enter/Return key pressed'); };
          $scope.focus = function(e) { console.log('Editable area is focused'); };
          $scope.blur = function(e) { console.log('Editable area loses focus'); };
          $scope.paste = function(e) {
              console.log('Called event paste: ' +  e.originalEvent.clipboardData.getData('text'));
          };
          $scope.change = function(contents) {
              console.log('contents are changed:', contents, $scope.editable);
          };
          $scope.keyup = function(e) { console.log('Key is released:', e.keyCode); };
          $scope.keydown = function(e) { console.log('Key is pressed:', e.keyCode); };
          $scope.imageUpload = function(files) {
              console.log('image upload:', files);
              console.log('image upload\'s editor:', $scope.editor);
              console.log('image upload\'s editable:', $scope.editable);
          };
      });