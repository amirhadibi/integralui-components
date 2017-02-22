/*
  filename: integralui.scrollbar.js
  version : 0.9.0 BETA
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(c,a){function b(){this.constructor=c}for(var d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);c.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)},__decorate=this&&this.__decorate||function(c,a,b,d){var f=arguments.length,e=3>f?a:null===d?d=Object.getOwnPropertyDescriptor(a,b):d,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(c,a,b,d);else for(var h=c.length-1;0<=h;h--)if(g=c[h])e=(3>f?g(e):3<f?g(a,b,e):
g(a,b))||e;return 3<f&&e&&Object.defineProperty(a,b,e),e},__metadata=this&&this.__metadata||function(c,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(c,a)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIScrollBar=function(c){function a(b,a,f){c.call(this,f);this.elemRef=b;this.elemRenderer=a;this.commonService=f;this.currentValue=this.currentMinValue=
this.currentMaxValue=0;this.currentSplitterDistance={x:0,y:0};this.emptySpace=0;this.maxPos={x:0,y:0};this.scrollSize={width:0,height:0};this.thumbSize={width:0,height:0};this.thumbPos={x:2,y:20};this.smallChange=this.largeChange=0;this.orientation=integralui_core_1.IntegralUIOrientation.Vertical;this.scrollStart=new core_1.EventEmitter;this.scrollEnd=new core_1.EventEmitter;this.valueChanged=new core_1.EventEmitter;this.thumbStartPos={x:0,y:0};this.isThumbActive=!1;this.prevPos={x:0,y:0}}__extends(a,
c);Object.defineProperty(a.prototype,"height",{set:function(b){this.scrollSize.height!=b&&0<=b&&(this.scrollSize.height=b,this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"max",{get:function(){return this.currentMaxValue},set:function(b){this.currentMaxValue!=b&&(this.currentMaxValue=0>=b?1:b,this.currentValue>this.currentMaxValue&&(this.currentValue=this.currentMaxValue),this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"min",{get:function(){return this.currentMinValue},set:function(b){this.currentMinValue!=b&&0<=b&&(this.currentMinValue=b,this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"value",{get:function(){return this.currentValue},set:function(b){this.currentValue!=b&&(this.currentValue=b<this.currentMinValue?this.currentMinValue:b>this.currentMaxValue?this.currentMaxValue:b,this.updateLayout(),this.valueChanged.emit({value:this.currentValue}))},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"width",{set:function(b){this.scrollSize.width!=b&&0<=b&&(this.scrollSize.width=b,this.updateLayout())},enumerable:!0,configurable:!0});a.prototype.ngOnInit=function(){this.generalClassName="iui-scrollbar";this.initStyle()};a.prototype.ngAfterViewInit=function(){};a.prototype.ngAfterContentInit=function(){var b=this,a=setTimeout(function(){b.updateLayout();clearTimeout(a)},1)};a.prototype.isVertical=function(){return this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?
!0:!1};a.prototype.getSize=function(){return{width:this.elemRef.nativeElement.firstElementChild.offsetWidth,height:this.elemRef.nativeElement.firstElementChild.offsetHeight}};a.prototype.setScrollSize=function(b){this.scrollSize=b};a.prototype.updateLayout=function(){if(this.orientation==integralui_core_1.IntegralUIOrientation.Horizontal){this.largeChange=this.scrollSize.width;var b=this.scrollSize.width-2,a;a=b/(this.currentMaxValue+this.largeChange);a*=this.largeChange;0>=this.currentMaxValue?a=
b:7>a&&(a=7);this.thumbSize.width=a;this.emptySpace=b-a;0<this.currentMaxValue&&(this.thumbPos.x=2+this.currentValue*this.emptySpace/this.currentMaxValue)}else this.largeChange=this.scrollSize.height,b=this.scrollSize.height-2,a=b/(this.currentMaxValue+this.largeChange),a*=this.largeChange,0>=this.currentMaxValue?a=b:7>a&&(a=7),this.thumbSize.height=a,this.emptySpace=b-a,0<this.currentMaxValue&&(this.thumbPos.y=2+this.currentValue*this.emptySpace/this.currentMaxValue)};a.prototype.thumbMouseDown=
function(a){var b=this.commonService.getShiftPos();this.thumbStartPos={x:a.pageX-b.x,y:a.pageY-b.y};this.isThumbActive=!0;this.prevPos={x:this.value,y:this.value};this.scrollStart.emit({value:this.currentValue})};a.prototype.onWindowMouseMove=function(a){if(1==a.buttons&&this.isThumbActive){var b=this.commonService.getShiftPos(),c=a.pageX-b.x;a=a.pageY-b.y;b=0;this.orientation==integralui_core_1.IntegralUIOrientation.Horizontal?0<this.emptySpace&&(b=this.prevPos.x+(c-this.thumbStartPos.x)*this.currentMaxValue/
this.emptySpace):0<this.emptySpace&&(b=this.prevPos.y+(a-this.thumbStartPos.y)*this.currentMaxValue/this.emptySpace);this.value=b}};a.prototype.onWindowMouseUp=function(a){this.isThumbActive=!1;this.prevPos.y=this.currentValue;this.scrollEnd.emit({value:this.currentValue})};a.prototype.getScrollBarStyle=function(){return this.orientation==integralui_core_1.IntegralUIOrientation.Horizontal?{bottom:0,width:this.scrollSize.width+"px"}:{right:0,height:this.scrollSize.height+"px"}};__decorate([core_1.Input(),
__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],a.prototype,"height",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],a.prototype,"max",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],a.prototype,"min",null);__decorate([core_1.Input(),__metadata("design:type",Number)],a.prototype,"orientation",void 0);__decorate([core_1.Input(),__metadata("design:type",
Number),__metadata("design:paramtypes",[Number])],a.prototype,"value",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],a.prototype,"width",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"scrollStart",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"scrollEnd",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,
"valueChanged",void 0);__decorate([core_1.HostListener("document:mousemove",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],a.prototype,"onWindowMouseMove",null);__decorate([core_1.HostListener("document:mouseup",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],a.prototype,"onWindowMouseUp",null);return a=__decorate([core_1.Component({moduleId:module.id,
selector:"iui-scrollbar",template:'\n\t\t<div *ngIf="isVertical()" class="iui-scrollbar-vertical" [ngStyle]="getScrollBarStyle()">\n\t\t\t<div class="iui-scroll-button-thumb-vertical" [ngStyle]="{ top: thumbPos.y + \'px\', height: thumbSize.height + \'px\' }" (mousedown)="thumbMouseDown($event)"></div>\n\t\t</div>\n\t\t<div *ngIf="!isVertical()" class="iui-scrollbar-horizontal" [ngStyle]="getScrollBarStyle()">\n\t\t\t<div class="iui-scroll-button-thumb-horizontal" [ngStyle]="{ left: thumbPos.x + \'px\', width: thumbSize.width + \'px\' }" (mousedown)="thumbMouseDown($event)"></div>\n\t\t</div>\n\t',
styleUrls:["css/integralui.scrollbar.css"],inputs:["controlStyle","data","state"],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer,integralui_common_service_1.IntegralUICommonService])],a)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIScrollBar=IntegralUIScrollBar;