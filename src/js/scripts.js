const customSuite = new Vue({
    el: '#custom-suite',
    data: {
        frontSuite: [
            {
                class: 'head',
                classMini: 'miny-head',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Head.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Head.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Head.webp',
                side: 'front',
                alt: 'Custom head image',
                value: 'head',
                pos: 'top'
            },
            {
                class: 'body',
                classMini: 'miny-body',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Body.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Body.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Body.webp',
                side: 'front',
                alt: 'Custom body image',
                value: 'front-body',
                pos: 'center'
            },
            {
                class: 'left-hand',
                classMini: 'miny-left-hand',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Hand.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Hand.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Left-Hand.webp',
                side: 'front',
                alt: 'Custom left hand image',
                value: 'left-hand',
                pos: 'left'
            },
            {
                class: 'left-hand-bottom',
                classMini: 'miny-left-hand-bottom',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Hand-Bottom.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Hand-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Left-Hand-Bottom.webp',
                side: 'front',
                alt: 'Custom left hand bottom image',
                value: 'left-wrist',
                pos: 'left-bottom'
            },
            {
                class: 'right-hand',
                classMini: 'miny-right-hand',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Hand.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Hand.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Right-Hand.webp',
                side: 'front',
                alt: 'Custom right hand image',
                value: 'right-hand',
                pos: 'right'
            },
            {
                class: 'right-hand-bottom',
                classMini: 'miny-right-hand-bottom',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Hand-Bottom.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Hand-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Right-Hand-Bottom.webp',
                side: 'front',
                alt: 'Custom right hand bottom image',
                value: 'right-wrist',
                pos: 'right-bottom'
            },
            {
                class: 'right-leg',
                classMini: 'miny-right-leg',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Leg.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Leg.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Right-Leg.webp',
                side: 'front',
                alt: 'Custom right leg image',
                value: 'right-leg',
                pos: 'bottom-right'
            },
            {
                class: 'right-leg-bottom',
                classMini: 'miny-right-leg-bottom',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Leg-Bottom.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Leg-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Right-Leg-Bottom.webp',
                side: 'front',
                alt: 'Custom right leg bottom image',
                value: 'right-ankle',
                pos: 'bottom-right'
            },
            {
                class: 'left-leg',
                classMini: 'miny-left-leg',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Leg.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Leg.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Left-Leg.webp',
                side: 'front',
                alt: 'Custom left leg image',
                value: 'left-leg',
                pos: 'bottom-left'
            },
            {
                class: 'left-leg-bottom',
                classMini: 'miny-left-leg-bottom',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Leg-Bottom.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Leg-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Left-Leg-Bottom.webp',
                side: 'front',
                alt: 'Custom left leg bottom image',
                value: 'left-ankle',
                pos: 'bottom-left'
            },
        ],
        backSuite: [
            {
                class: 'back-head',
                classMini: 'miny-back-head',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Head.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Head.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Head.webp',
                value: 'head',
                side: 'back',
                alt:  'Custom back head image',
                pos: 'top'
            },
            {
                class: 'back-body',
                classMini: 'miny-back-body',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Body.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Body.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Body.webp',
                side: 'back',
                alt:  'Custom back body image',
                value: 'back-body',
                pos: 'center'
            },
            {
                class: 'back-left-hand',
                classMini: 'miny-back-left-hand',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Hand.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Hand.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Left-Hand.webp',
                side: 'back',
                alt:  'Custom back left hand image',
                value: 'left-hand',
                pos: 'left'
            },
            {
                class: 'back-left-hand-bottom',
                classMini: 'miny-back-left-hand-bottom',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Hand-Bottom.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Hand-Bottom.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Left-Hand-Bottom.webp',
                side: 'back',
                alt:  'Custom back left hand bottom image',
                value: 'left-wrist',
                pos: 'left-bottom'
            },
            {
                class: 'back-right-hand',
                classMini: 'miny-back-right-hand',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Hand.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Hand.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Right-Hand.webp',
                side: 'back',
                alt:  'Custom back right hand image',
                value: 'right-hand',
                pos: 'right'
            },
            {
                class: 'back-right-hand-bottom',
                classMini: 'miny-back-right-hand-bottom',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Hand-Bottom.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Hand-Bottom.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Right-Hand-Bottom.webp',
                side: 'back',
                alt:  'Custom back right hand bottom image',
                value: 'right-wrist',
                pos: 'right-bottom'
            },
            {
                class: 'back-left-leg',
                classMini: 'miny-back-left-leg',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Leg.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Leg.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Left-Leg.webp',
                side: 'back',
                alt:  'Custom back left lag image',
                value: 'left-leg',
                pos: 'bottom-left'
            },
            {
                class: 'back-left-leg-bottom',
                classMini: 'miny-back-left-leg-bottom',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Leg-Bottom.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Leg-Bottom.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Left-Leg-Bottom.webp',
                side: 'back',
                alt:  'Custom back left lag bottom image',
                value: 'left-ankle',
                pos: 'bottom-left'
            },
            {
                class: 'back-right-leg',
                classMini: 'miny-back-right-leg',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Leg.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Leg.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Right-Leg.webp',
                side: 'back',
                alt:  'Custom back right lag image',
                value: 'right-leg',
                pos: 'bottom-right'
            },
            {
                class: 'back-right-leg-bottom',
                classMini: 'miny-back-right-leg-bottom',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Leg-Bottom.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Leg-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Right-Leg-Bottom.webp',
                side: 'back',
                alt:  'Custom back right lag bottom image',
                value: 'right-ankle',
                pos: 'bottom-right'
            },
        ],
        switchBtn: 'Back',
        showSide: true,
        selectColor: {
            colors: [
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/black1.png',
                    value: 'black'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/beige1.png',
                    value: 'beige'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/black_white1.png',
                    value: 'black_white'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/blue1.png',
                    value: 'blue'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/blue_white1.png',
                    value: 'blueWhite'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/light_blue1.png',
                    value: 'light_blue'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/light_green1.png',
                    value: 'light_green'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/olive1.png',
                    value: 'olive'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/orange1.png',
                    value: 'orange'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/pink1.png',
                    value: 'pink'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/red1.png',
                    value: 'red'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/red_white1.png',
                    value: 'red_white'
                },
                {
                    src: 'https://www.fdt-dog-supplies.com/custom_suite/images/colors/yellow1.png',
                    value: 'yellow'
                },
            ],
            isActiveColor: ''
        },
        btnColorTool: [
            {
                desc: 'Collar',
                value: 'head',
                activeColor: 'black',
                cssCls: 'btnColorTool--head'
            },
            {
                desc: 'Body',
                value: 'body' ,
                activeColor: 'black',
                activeFrontColor: 'black',
                activeBackColor: 'black',
                cssCls: 'btnColorTool--body'
            },
            {
                desc: 'Right Hand',
                value: 'right-hand' ,
                activeColor: 'black',
                cssCls: 'btnColorTool--right-hand'
            },
            {
                desc: 'Right Wrist',
                value: 'right-wrist' ,
                activeColor: 'black',
                cssCls: 'btnColorTool--right-wrist'
            },
            {
                desc: 'Left Hand',
                value: 'left-hand' ,
                activeColor: 'black',
                cssCls: 'btnColorTool--left-hand'
            },
            {
                desc: 'Left Wrist',
                value: 'left-wrist' ,
                activeColor: 'black',
                cssCls: 'btnColorTool--left-wrist'
            },
            {
                desc: 'Right Leg',
                value: 'right-leg' ,
                activeColor: 'black',
                cssCls: 'btnColorTool--right-leg'
            },
            {
                desc: 'Right Ankle',
                value: 'right-ankle' ,
                activeColor: 'black',
                cssCls: 'btnColorTool--right-ankle'
            },
            {
                desc: 'Left Leg',
                value: 'left-leg' ,
                activeColor: 'black',
                cssCls: 'btnColorTool--left-leg'
            },
            {
                desc: 'Left ankle',
                value: 'left-ankle' ,
                activeColor: 'black',
                cssCls: 'btnColorTool--left-ankle'
            },

        ],
        selectedPart: '',
        disabledEvent: [ 'disabled-event', 'not-allowed' ],
        activeColorCls: 'is-active-color',
        ctx: null,
        toggleToolBtns:false,
        activeSVGSelection:[],
        canvasWidth:500,
        canvasHeight:500,
        showLoader:false,
        showWarning: false,
    },
    methods: {
        switchSidesHandler(){
            this.showSide = !this.showSide;
            this.setActiveColorToBodyObj()
            if (this.showSide) {
                this.switchBtn = 'Front';
                this.drawImages(this.frontSuite)

            } else {
                this.switchBtn = 'Back';
                this.drawImages(this.backSuite)
            }
            this.selectedPart = '';
            this.selectColor.isActiveColor = '';
            },

        selectPartHandled(id){
            let part = this.btnColorTool[id];
            this.selectedPart = part.value;
            this.setSelectedColor(part);
            this.activeSVGSelection =  this.drawSVGSelect(part.value);

        },

        choiceColorHandler(color){
            let assignArray = [...this.frontSuite, ...this.backSuite];
            if(!this.selectedPart.includes('body')){
                assignArray.forEach(el => {
                    if(this.selectedPart === el.value){
                        this.$set(el, 'src', el[color]);
                        this.setComponentsActiveColor(color);

                    }
                })
            } else {
                this.changeBodyPart(color);
            }
            this.showSide ? this.drawImages(this.frontSuite) :
                this.drawImages(this.backSuite)
        },

        changeBodyPart(color) {
            let sideArray = this.showSide ?
                this.frontSuite : this.backSuite;
            let toolBtnObjBody = this.btnColorTool.find(el => {
                return el.value === 'body'
            })
            let bodyObj = sideArray.find(el => {
                return el.value.includes('body');
            });
            this.showSide ? this.$set(toolBtnObjBody, 'activeFrontColor', color) :
                            this.$set(toolBtnObjBody, 'activeBackColor', color);

            this.$set(bodyObj, 'src', bodyObj[color]);
            this.setComponentsActiveColor(color)

        },

        setComponentsActiveColor(color){
            let selectedBtnTool = this.btnColorTool.find(el => {
                return el.value === this.selectedPart
            })
            this.$set(selectedBtnTool, 'activeColor', color);
            this.setSelectedColor(selectedBtnTool,selectedBtnTool.value);


        },

        setSelectedColor(obj){
            this.$set(this.selectColor, 'isActiveColor', obj.activeColor);
            },

        setActiveColorToBodyObj() {
          const bodyBtn = this.btnColorTool.find((el,idx) => {
              return el.value === 'body'
          });
            if( this.showSide ) {
                this.$set(bodyBtn, 'activeColor', bodyBtn.activeFrontColor);
            } else {
                this.$set(bodyBtn, 'activeColor', bodyBtn.activeBackColor);
            }
        },

        drawImages(images){
        let ctx = this.ctx
            ctx.clearRect(0,0,500,500);
            images.forEach(image => {
                let img = new Image ();
                img.src = image.src;
                img.onload = function () {
                    ctx.drawImage(img, 0, 0,500,500);
                }
            })

        },

        drawSVGSelect(part) {
            part = this.showSide ? `${part}-front` : `${part}-back`

            switch (part) {
                case 'left-hand-front' :
                  return  [
                      '#left-hand-front',
                      'select-lines__svg--left-hand-front',
                      'select-lines--left-hand-front',
                  ];

                case 'body-front':
                    return [
                        '#body-front',
                        'select-lines__svg--body-front',
                        'select-lines--body-front',
                    ];

                case 'head-front':
                    return [
                        '#collar-front',
                        'select-lines__svg--collar-front',
                        'select-lines--collar-front',
                    ];

                case 'left-ankle-front':
                    return [
                        '#left-ankle-front',
                        'select-lines__svg--left-ankle-front',
                        'select-lines--left-ankle-front',
                    ];

                case 'left-wrist-front':
                    return [
                        '#left-wrist-front',
                        'select-lines__svg--left-wrist-front',
                        'select-lines--left-wrist-front',
                    ];

                case 'right-ankle-front':
                    return [
                        '#right-ankle-front',
                        'select-lines__svg--right-ankle-front',
                        'select-lines--right-ankle-front',
                    ];

                case 'left-leg-front':
                    return [
                        '#left-leg-front',
                        'select-lines__svg--left-leg-front',
                        'select-lines--left-leg-front',
                    ];

                case 'right-leg-front':
                    return [
                        '#right-leg-front',
                        'select-lines__svg--right-leg-front',
                        'select-lines--right-leg-front',
                    ];

                case 'right-wrist-front':
                    return [
                        '#right-wrist-front',
                        'select-lines__svg--right-wrist-front',
                        'select-lines--right-wrist-front',
                    ];

                case 'right-hand-front':
                    return [
                       '#right-hand-front',
                        'select-lines__svg--right-hand-front',
                        'select-lines--right-hand-front',
                    ];

                case 'head-back':
                    return [
                        '#collar-back',
                        'select-lines__svg--collar-back',
                        'select-lines--collar-back',
                    ];

                case 'body-back':
                    return [
                        '#body-back',
                        'select-lines__svg--body-back',
                        'select-lines--body-back',
                    ];

                case 'left-hand-back':
                    return [
                        '#left-hand-back',
                        'select-lines__svg--left-hand-back',
                        'select-lines--left-hand-back',
                    ];

                case 'right-hand-back':
                    return [
                        '#right-hand-back',
                        'select-lines__svg--right-hand-back',
                        'select-lines--right-hand-back',
                    ];

                case 'right-wrist-back':
                    return [
                        '#right-wrist-back',
                        'select-lines__svg--right-wrist-back',
                        'select-lines--right-wrist-back',
                    ];

                case 'right-leg-back':
                    return [
                        '#right-leg-back',
                        'select-lines__svg--right-leg-back',
                        'select-lines--right-leg-back',
                    ];

                case 'right-ankle-back':
                    return [
                        '#right-ankle-back',
                        'select-lines__svg--right-ankle-back',
                        'select-lines--right-ankle-back',
                    ];

                case 'left-wrist-back':
                    return [
                        '#left-wrist-back',
                        'select-lines__svg--left-wrist-back',
                        'select-lines--left-wrist-back',
                    ];

                case 'left-leg-back':
                    return [
                        '#left-leg-back',
                        'select-lines__svg--left-leg-back',
                        'select-lines--left-leg-back',
                    ];

                case 'left-ankle-back':
                    return [
                        '#left-ankle-back',
                        'select-lines__svg--left-ankle-back',
                        'select-lines--left-ankle-back',
                    ];

                default :
                    return '';
            }
        },

        toggleTools() {
            this.toggleToolBtns = !this.toggleToolBtns;
        },

        toggleToolsMobile() {
            this.toggleToolBtns = !this.toggleToolBtns
        },

        sentImageData() {
           const sentImagesPath = async () => {
               try {
                   this.showLoader = true;
                   const request = await  fetch('https://www.fdt-dog-supplies.com/custom_suite/createImages.php', {
                       method: "POST",
                       headers: {
                           'Content-Type': 'application/json',
                       },
                       body: JSON.stringify({
                           type: 'create_images',
                           frontParts: this.frontSuite,
                           backParts: this.backSuite,
                           id: Date.now() + Math.floor(Math.random() * 100),
                       })
                   })
                   const {status,data} =  await request.json()
                   if(!status) throw new Error('Error')

               } catch (e) {
                   console.error(e)
               } finally {
                   this.showLoader = false;
                   this.isDisabledBtn = true;
                   setPzenAjxAddCart(this, '582');

               }
           }
            if(!this.checkExistsCookie()) {
                sentImagesPath()
            } else {
                this.showWarning = true;
                const timeOut = setTimeout(()=> {
                    this.showWarning = false;
                    clearTimeout(timeOut)
                },1000)
            }
        },

        checkExistsCookie(name) {
            const cookie = document.cookie;
           if (cookie.indexOf('custom_suite_front_img=') !== -1) {
               return true
           }
           return  false
        }
    },

    mounted() {
        const canvas =  this.$refs.canRef;
        if(canvas) {
            this.ctx = canvas.getContext("2d");
            this.drawImages(this.frontSuite)
        }

    }
});