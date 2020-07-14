(function($) {
    "use strict"

    /* 1. Proloder */
    $(window).on('load', function() {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });

    /* 2. sticky And Scroll UP */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".header-sticky").removeClass("sticky-bar");
            $('#back-top').fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $('#back-top').fadeIn(500);
        }
    });

    // Scroll Up
    $('#back-top a').on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /* 3. slick Nav */
    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol: '-'
        });
    };

    /* 4. MainSlider-1 */
    // h1-hero-active
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            fade: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    /* 5. Testimonial Active*/

    /* 4. Testimonial Active*/
    var testimonial = $('.h1-testimonial-active');
    if (testimonial.length) {
        testimonial.slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: false,
            loop: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrow: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    }



    /* 6. Nice Selectorp  */
    var nice_Select = $('select');
    if (nice_Select.length) {
        nice_Select.niceSelect();
    }

    /* 7. data-background */
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });


    /* 10. WOW active */
    new WOW().init();

    // 11. ---- Mailchimp js --------//  
    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


    // 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
    if (popUp.length) {
        popUp.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    // 12 Pop Up Video
    var popUp = $('.popup-video');
    if (popUp.length) {
        popUp.magnificPopup({
            type: 'iframe'
        });
    }

    /* 13. counterUp*/
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    if (mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Use this for real timer date
    /*  var timerdate = "2020/01/01"; */

    $("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span><p>Days</p> </div>" + "<div class='cd-item'><span>%H</span><p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span><p>Min</p> </div>" + "<div class='cd-item'><span>%S</span><p>Sec</p> </div>"));
    });




    /* 14. Datepicker */
    $('#datepicker1').datepicker();

    // 15. Time Picker
    $('#timepicker').timepicker();


    angular.module('form', [])

    .service('formDataSvc', [function() {
        var scope = this;

        scope.formData = {};

        scope.forms = [];
        scope.registerForm = function(name) {
            scope.forms.push(name);
        };

        scope.fields = {};
        scope.registerField = function(form, model) {
            scope.fields[form] = scope.fields[form] || {};
            scope.fields[form][model.$name] = model;
        };

        scope.setFieldValue = function(fieldName, form, value) {
            form = form.$name ? form.$name : form;
            if (!scope.formData[form])
                scope.formData[form] = {};
            scope.formData[form][fieldName] = value;
        };

        scope.getFieldValue = function(form, field) {
            if (scope.formData[form] && scope.formData[form][field])
                return scope.formData[form][field];
        };

        return scope;
    }])

    .directive('multiStepForm', ['$http', '$injector', 'formDataSvc', function($http, $injector, formDataSvc) {
        /*
         * Placed above the <form> tags
         * Exposes a controller for registering forms/fields which can be injected into other directives
         */
        return {
            restrict: 'A',
            scope: true,
            controller: ['$scope', function($scope) {
                /*
                 * Array of forms
                 * Used for determining form class
                 */
                this.registerForm = function(name) {
                    formDataSvc.registerForm(name);
                };

                /*
                 * Field registry
                 * Registers a field so its validators may be called on submit
                 */
                this.registerField = function(form, model) {
                    formDataSvc.registerField(form, model);
                };

                /*
                 * Set a form value
                 * Used with multi-field directive to set values for fields which have no input
                 * For example, phone_1, phone_2, phone_3 values are mapped to phone_number
                 */
                this.setFieldValue = function(fieldName, form, value) {
                    formDataSvc.setFieldValue(fieldName, form, value);
                };

                /*
                 * Getter for form values not associated with an input
                 */
                this.getFieldValue = function(form, field) {
                    return formDataSvc.getFieldValue(form, field);
                };
            }],
            link: function(scope, elem) {
                /* Initialize some properties */
                scope.formStep = 0;
                scope.formData = {};
                scope.errors = {};

                scope.$watch('formData', function(f) {
                    formDataSvc.formData = f;
                });

                scope.$watch(function() {
                    return formDataSvc.formData;
                }, function(f) {
                    scope.formData = f;
                });

                /* Url encode data */
                function formatData(obj) {
                    var parts = [];
                    for (var key in obj)
                        parts.push([
                            encodeURIComponent(key),
                            encodeURIComponent(obj[key])
                        ].join('='));
                    return parts.join('&').replace(/%20/g, "+");
                }

                /* Return any errors under the specified key */
                scope.error = function(field) {
                    return scope.errors[field];
                };

                /* Return true if the field has no errors and has been touched by the user */
                scope.valid = function(form, field) {
                    return !scope.errors[field] && formDataSvc.fields[form][field].$dirty;
                };

                /* Progress bar class */
                scope.progressClass = function() {
                    if (formDataSvc.forms.length === 4) {
                        if (scope.formStep === 0) return 'one-fifth';
                        if (scope.formStep === 1) return 'two-fifths';
                        if (scope.formStep === 2) return 'three-fifths';
                        if (scope.formStep === 3) return 'four-fifths';
                    } else if (formDataSvc.forms.length === 3) {
                        if (scope.formStep === 0) return 'one-quarter';
                        if (scope.formStep === 1) return 'one-half';
                        if (scope.formStep === 2) return 'three-quarters';
                    } else if (formDataSvc.forms.length === 2) {
                        if (scope.formStep === 0) return 'one-third';
                        if (scope.formStep === 1) return 'two-thirds';
                    }
                };

                /*
                 * Submit step
                 */
                scope.submitStep = function(name, done) {
                    /* First, validate all fields */
                    scope.errors = {};
                    if (formDataSvc.fields[name]) {
                        for (var a in formDataSvc.fields[name]) {
                            var err = formDataSvc.fields[name][a].validate();
                            if (!err) continue;
                            for (var key in err)
                                scope.errors[key] = err[key];
                        }
                    }

                    /* 
                     * Assuming there are no errors:
                     * If we are submitting the final step, hit the server
                     * Otherwise, advance the formStep
                     */
                    if (done && angular.equals(scope.errors, {})) {
                        scope.disableSubmit = true;
                        var data = {};

                        angular.forEach(scope.formData, function(stepData, step) {
                            angular.forEach(stepData, function(v, k) {
                                data[k] = v;
                            });
                        })

                        $http({
                            method: 'POST',
                            url: window.location.href,
                            data: formatData(data),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        }).then(function(response) {
                            console.log(response.data);
                        });
                    } else if (angular.equals(scope.errors, {}))
                        scope.formStep++;
                };
            }
        };
    }])

    .directive('form', [function() {
        /* Register the form with the multi-step controller so we can determine form class */
        return {
            restrict: 'E',
            require: '?^multiStepForm',
            link: function(scope, elem, attrs, multiStepForm) {
                if (!multiStepForm) return;
                multiStepForm.registerForm(attrs.name);

                scope.setValue = function(field, form, value) {
                    multiStepForm.setFieldValue(field, form, value)
                };
            }
        };
    }])

    .directive('ngModel', [function() {
        return {
            restrict: 'A',
            require: ['?^multiStepForm', '^form', 'ngModel'],
            link: function(scope, elem, attrs, ctrls) {
                if (!ctrls[0]) return;
                /*
                 * Register the field with the multi-step controller and initialize validation array
                 */
                ctrls[0].registerField(ctrls[1].$name, ctrls[2]);
                ctrls[2].validators = ctrls[2].validators || [];

                /*
                 * Create a validate function on ngModel which runs each validator and returns true if the validator returns true
                 */
                ctrls[2].validate = function() {
                    for (var a = 0; a < ctrls[2].validators.length; a++) {
                        var invalid = ctrls[2].validators[a]();
                        if (invalid) return invalid;
                    }
                    return false;
                };
            }
        }
    }])

    .directive('validateOnBlur', [function() {
        /*
         * Run the field validators on blur or change
         * Only set errors if the field is dirty (has been touched by the user)
         */
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel) {
                function validate() {
                    var err = ngModel.validate();
                    if (!err) delete scope.errors[attrs.name];
                    if (ngModel.$dirty)
                        for (var key in err)
                            scope.errors[key] = err[key];

                    scope.$apply();
                }

                elem.on('blur', function() {
                    validate();
                });
                // elem.on('keyup', function() {
                //   validate();
                // });
                elem.on('change', function() {
                    validate();
                });
            }
        }
    }])



    .filter('dogFilter', function() {
        return function(input, active) {
            if (!input) return input;
            var result = {};
            angular.forEach(input, function(value, key) {
                if (active && value.isDog || !active && !value.isDog)
                    result[key] = value;
            });
            return result;
        }
    })

    .directive('required', ['$timeout', function($timeout) {
        /*
         * Required field validator
         * Register a validator on ngModel that will return true if the field is invalid and visible
         */
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel) {
                var key = attrs.error || attrs.name;

                $timeout(function() {
                    ngModel.validators.push(function() {
                        if (ngModel.$invalid && angular.element(elem).is(':visible')) {
                            var error = {};
                            error[key] = 'Required';
                            return error;
                        }
                        return false;
                    });
                });
            }
        };
    }])

    .directive('disclaimer', [function() {
        /*
         * Monitor the field specified in the data-disclaimer attribute
         * Set local 'show' property if (parsed) field value length is >= 10
         */
        return {
            restrict: 'A',
            scope: true,
            require: ['^form', '^multiStepForm'],
            link: function(scope, elem, attrs, ctrls) {
                scope.$watch(function() {
                    return ctrls[1].getFieldValue(ctrls[0].$name, attrs.disclaimer);
                }, function(phone) {
                    if (!phone) return;

                    if (phone.replace(/\D/g, '').length >= 10)
                        scope.show = true;
                });
            }
        };
    }])

    .directive('numberField', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope: true,
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel) {
                var key = attrs.error || attrs.name;

                /*
                 * Register a validator that, if number field attribute is true,
                 * will set an error if field value length is less than maxlength attribute
                 */
                $timeout(function() {
                    if (!attrs.maxlength) return;
                    ngModel.validators.push(function() {
                        if (attrs.numberField === 'false') return false;
                        if (ngModel.$viewValue.length < attrs.maxlength) {
                            var error = {};
                            error[key] = 'Required';
                            return error;
                        }
                        return false;
                    });
                });

                /*
                 * On field value change, if number field attribute is true, strip non-digit characters
                 */
                ngModel.$viewChangeListeners.push(function(x) {
                    if (attrs.numberField === 'true') {
                        ngModel.$setViewValue(ngModel.$viewValue.replace(/\D/g, '').substr(0, attrs.maxlength));
                        ngModel.$render();
                    }
                });
            }
        };
    }])

    .directive('phoneMask', [function() {
        /*
         * Auto-format phone number while typing
         */
        return {
            restrict: 'A',
            scope: true,
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel) {
                function format(value) {
                    if (!attrs.phoneMask) return value;

                    var pattern = attrs.phoneMask.split('');
                    var chars = value.split('');
                    var formatted = '';
                    var count = 0;

                    angular.forEach(pattern, function(c, i) {
                        if (chars[count]) {
                            if (/\*/.test(c)) {
                                formatted += chars[count];
                                count++;
                            } else {
                                formatted += c;
                            }
                        }
                    });

                    return formatted;
                }

                ngModel.$viewChangeListeners.push(function(x) {
                    ngModel.$setViewValue(format(ngModel.$viewValue.replace(/\D/g, '')));
                    ngModel.$render();
                });
            }
        };
    }])

    .directive('match', ['$timeout', function($timeout) {
        /*
         * Register a validator that will match the field value to the value of the field specified in the data-match attribute
         */
        return {
            restrict: 'A',
            require: ['^form', 'ngModel'],
            link: function(scope, elem, attrs, ctrls) {
                var form = ctrls[0];
                var ngModel = ctrls[1];
                var key = attrs.error || attrs.name;

                $timeout(function() {
                    ngModel.validators.push(function() {
                        if (form[attrs.match].$viewValue != ngModel.$viewValue && elem.is(':visible')) {
                            var error = {};
                            error[key] = attrs.errorMsg || 'Values must match';
                            return error;
                        }
                        return false;
                    });
                });
            }
        };
    }])

    .directive('fieldDefault', ['$timeout', function($timeout) {
        /*
         * Specify a default field value on init
         */
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel) {
                $timeout(function() {
                    ngModel.$setViewValue(attrs.fieldDefault);
                    ngModel.$render();
                });
            }
        };
    }])

    .directive('multiField', [function() {
        /*
         * Parent directive for handling fields with multiple inputs
         * For example, phone number, date of birth, etc
         */
        return {
            restrict: 'A',
            scope: true,
            require: ['^form', '^multiStepForm'],
            controller: ['$scope', function($scope) {
                /* Field registry */
                this.fields = [];
                this.registerInput = function(elem, model) {
                    this.fields.push({
                        elem: elem,
                        model: model
                    });
                };

                /* Focus on the next field in the registry */
                this.next = function(e) {
                    for (var a = 0; a < this.fields.length - 1; a++) {
                        if (this.fields[a].elem === e)
                            this.fields[a + 1].elem.focus();
                    }
                };

                /* Concatenate registered input values and set field value in multi-step controller */
                this.keyup = function() {
                    var value = '';
                    angular.forEach(this.fields, function(f) {
                        value = [value, f.model.$viewValue ? f.model.$viewValue : ''].join('');
                    });
                    $scope.update(value);
                };
            }],
            link: function(scope, elem, attrs, ctrls) {
                var form = ctrls[0];
                var multiStepForm = ctrls[1];

                /* Format field value */
                function format(value) {
                    if (!attrs.format) return value;

                    var pattern = attrs.format.split('');
                    var chars = value.split('');
                    var formatted = '';
                    var count = 0;

                    angular.forEach(pattern, function(c, i) {
                        if (chars[count]) {
                            if (/\*/.test(c)) {
                                formatted += chars[count];
                                count++;
                            } else {
                                formatted += c;
                            }
                        }
                    });

                    return formatted;
                }

                /* Set field value in the multi-step controller */
                scope.update = function(value) {
                    multiStepForm.setFormValue(attrs.multiField, form, format(value));
                };
            }
        };
    }])

    .directive('minLength', ['$timeout', function($timeout) {
        /*
         * Register a validator that will set an error if the input value length is below the data-min-length value
         */
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel) {
                var key = attrs.error || attrs.name;

                $timeout(function() {
                    ngModel.validators.push(function() {
                        if (ngModel.$viewValue.length < attrs.minLength) {
                            var error = {};
                            error[key] = attrs.errorMsg || 'Required';
                            return error;
                        }
                        return false;
                    });
                });
            }
        };
    }])

    .directive('phoneInput', [function() {
        /*
         * Register an input with the multi-field controller
         * Listen for input changes and update field value
         */
        return {
            restrict: 'C',
            scope: true,
            require: ['^multiField', 'ngModel'],
            link: function(scope, elem, attrs, ctrls) {
                var parentCtrl = ctrls[0];
                var ngModel = ctrls[1];
                parentCtrl.registerInput(elem, ngModel);

                ngModel.$viewChangeListeners.push(function() {
                    parentCtrl.keyup();
                    if (attrs.maxlength && ngModel.$viewValue.length == attrs.maxlength)
                        parentCtrl.next(elem);
                });
            }
        };
    }]);



})(jQuery);