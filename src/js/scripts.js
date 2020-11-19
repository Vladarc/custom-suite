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
                value: 'head'
            },
            {
                class: 'body',
                classMini: 'miny-body',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Body.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Body.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Body.webp',
                side: 'front',
                alt: 'Custom body image',
                value: 'front-body'
            },
            {
                class: 'left-hand',
                classMini: 'miny-left-hand',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Hand.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Hand.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Left-Hand.webp',
                side: 'front',
                alt: 'Custom left hand image',
                value: 'left-hand'
            },
            {
                class: 'left-hand-bottom',
                classMini: 'miny-left-hand-bottom',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Hand-Bottom.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Hand-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Left-Hand-Bottom.webp',
                side: 'front',
                alt: 'Custom left hand bottom image',
                value: 'left-wrist'
            },
            {
                class: 'right-hand',
                classMini: 'miny-right-hand',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Hand.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Hand.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Right-Hand.webp',
                side: 'front',
                alt: 'Custom right hand image',
                value: 'right-hand'
            },
            {
                class: 'right-hand-bottom',
                classMini: 'miny-right-hand-bottom',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Hand-Bottom.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Hand-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Right-Hand-Bottom.webp',
                side: 'front',
                alt: 'Custom right hand bottom image',
                value: 'right-wrist'
            },
            {
                class: 'right-leg',
                classMini: 'miny-right-leg',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Leg.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Leg.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Right-Leg.webp',
                side: 'front',
                alt: 'Custom right leg image',
                value: 'right-leg'
            },
            {
                class: 'right-leg-bottom',
                classMini: 'miny-right-leg-bottom',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Leg-Bottom.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Right-Leg-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Right-Leg-Bottom.webp',
                side: 'front',
                alt: 'Custom right leg bottom image',
                value: 'right-ankle'
            },
            {
                class: 'left-leg',
                classMini: 'miny-left-leg',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Leg.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Leg.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Left-Leg.webp',
                side: 'front',
                alt: 'Custom left leg image',
                value: 'left-leg'
            },
            {
                class: 'left-leg-bottom',
                classMini: 'miny-left-leg-bottom',
                src: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Leg-Bottom.webp',
                black: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Black-Left-Leg-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/front_side_webp/PBS-Front-Blue-White-Left-Leg-Bottom.webp',
                side: 'front',
                alt: 'Custom left leg bottom image',
                value: 'left-ankle'
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
                alt:  'Custom back head image'
            },
            {
                class: 'back-body',
                classMini: 'miny-back-body',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Body.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Body.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Body.webp',
                side: 'back',
                alt:  'Custom back body image',
                value: 'back-body'
            },
            {
                class: 'back-left-hand',
                classMini: 'miny-back-left-hand',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Hand.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Hand.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Left-Hand.webp',
                side: 'back',
                alt:  'Custom back left hand image',
                value: 'left-hand'
            },
            {
                class: 'back-left-hand-bottom',
                classMini: 'miny-back-left-hand-bottom',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Hand-Bottom.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Hand-Bottom.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Left-Hand-Bottom.webp',
                side: 'back',
                alt:  'Custom back left hand bottom image',
                value: 'left-wrist'
            },
            {
                class: 'back-right-hand',
                classMini: 'miny-back-right-hand',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Hand.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Hand.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Right-Hand.webp',
                side: 'back',
                alt:  'Custom back right hand image',
                value: 'right-hand'
            },
            {
                class: 'back-right-hand-bottom',
                classMini: 'miny-back-right-hand-bottom',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Hand-Bottom.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Hand-Bottom.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Right-Hand-Bottom.webp',
                side: 'back',
                alt:  'Custom back right hand bottom image',
                value: 'right-wrist'
            },
            {
                class: 'back-left-leg',
                classMini: 'miny-back-left-leg',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Leg.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Leg.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Left-Leg.webp',
                side: 'back',
                alt:  'Custom back left lag image',
                value: 'left-leg'
            },
            {
                class: 'back-left-leg-bottom',
                classMini: 'miny-back-left-leg-bottom',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Leg-Bottom.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Left-Leg-Bottom.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Left-Leg-Bottom.webp',
                side: 'back',
                alt:  'Custom back left lag bottom image',
                value: 'left-ankle'
            },
            {
                class: 'back-right-leg',
                classMini: 'miny-back-right-leg',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Leg.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Leg.webp',
                blueWhite:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Right-Leg.webp',
                side: 'back',
                alt:  'Custom back right lag image',
                value: 'right-leg'
            },
            {
                class: 'back-right-leg-bottom',
                classMini: 'miny-back-right-leg-bottom',
                src:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Leg-Bottom.webp',
                black:  'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Black-Right-Leg-Bottom.webp',
                blueWhite: 'https://www.fdt-dog-supplies.com/custom_suite/images/back_side_webp/PBS-Backside-Blue-White-Right-Leg-Bottom.webp',
                side: 'back',
                alt:  'Custom back right lag bottom image',
                value: 'right-ankle'
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
        svgSelectionPath: {
            leftHandFront: `<path d="M2.02546 45C2.52546 41 21.5254 6 34.5254 2C37.5253 6 44.4248 
                            15.9 50.0248 25.5C58.7748 40.5 68.5248 69 72.0248 78C75.5248 87 81.5248 134 
                            81.5248 140C81.5248 146 78.5248 166.5 77.5248 166.5C76.5248 166.5 56.0248 163 
                            47.0248 163.5C38.0248 164 36.0248 166.5 34.5248 164.5C35.0248 149 33.093 
                            141.295 33.0248 140C32.5248 130.5 28.5248 108 24.0248 101C19.5248 94 13.525 
                            85.5 11.025 76C8.52496 66.5 1.52546 49 2.02546 45Z" 
                            stroke="#DC004E" stroke-width="3" stroke-miterlimit="16" stroke-dasharray="10 5"/>`
        },
        activeSVGSelection:[],
        canvasWidth:500,
        canvasHeight:500,
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
                    console.log ('loaded')
                    ctx.drawImage(img, 0, 0,500,500);
                }
            })

        },

        drawSVGSelect(part) {
            part = this.showSide ? `${part}-front` : `${part}-back`
            switch (part) {
                case 'left-hand-front' :
                  return  [
                      this.svgSelectionPath.leftHandFront,
                      'select-lines__svg--left-hand-front',
                      'select-lines--left-hand-front'
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
    },


    mounted() {
        const canvas =  this.$refs.canRef;
        this.ctx = canvas.getContext("2d");
        this.drawImages(this.frontSuite)
    }
});