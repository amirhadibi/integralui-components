/*
  filename: integralui.core.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(a,b){function e(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)},__decorate=this&&this.__decorate||function(a,b,e,d){var c=arguments.length,f=3>c?b:null===d?d=Object.getOwnPropertyDescriptor(b,e):d,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(a,b,e,d);else for(var h=a.length-1;0<=h;h--)if(g=a[h])f=(3>c?g(f):3<c?g(b,e,f):
g(b,e))||f;return 3<c&&f&&Object.defineProperty(b,e,f),f},__metadata=this&&this.__metadata||function(a,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(a,b)},core_1=require("@angular/core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUITemplate=function(){function a(){}a.prototype.getTemplate=function(){return this.template};return a}();
__decorate([core_1.Input("iuiTemplate"),__metadata("design:type",Object)],IntegralUITemplate.prototype,"settings",void 0);__decorate([core_1.ContentChild(core_1.TemplateRef),__metadata("design:type",core_1.TemplateRef)],IntegralUITemplate.prototype,"template",void 0);IntegralUITemplate=__decorate([core_1.Directive({selector:"[iuiTemplate]"}),__metadata("design:paramtypes",[])],IntegralUITemplate);exports.IntegralUITemplate=IntegralUITemplate;
var IntegralUITemplateOutlet=function(){function a(a){this.containerRef=a}a.prototype.ngOnChanges=function(a){this.removeView();this.createView()};a.prototype.ngOnDestroy=function(){this.removeView()};a.prototype.createView=function(){this.iuiTemplateOutlet&&(this.viewRef=this.containerRef.createEmbeddedView(this.iuiTemplateOutlet,this.iuiTemplateOutletContext))};a.prototype.removeView=function(){this.viewRef&&this.containerRef.remove(this.containerRef.indexOf(this.viewRef))};return a}();
__decorate([core_1.Input(),__metadata("design:type",Object)],IntegralUITemplateOutlet.prototype,"iuiTemplateOutletContext",void 0);__decorate([core_1.Input(),__metadata("design:type",core_1.TemplateRef)],IntegralUITemplateOutlet.prototype,"iuiTemplateOutlet",void 0);IntegralUITemplateOutlet=__decorate([core_1.Directive({selector:"[iuiTemplateOutlet]"}),__metadata("design:paramtypes",[core_1.ViewContainerRef])],IntegralUITemplateOutlet);exports.IntegralUITemplateOutlet=IntegralUITemplateOutlet;var IntegralUIAnchorStyle;
(function(a){a[a.None=0]="None";a[a.Top=1]="Top";a[a.Right=2]="Right";a[a.Bottom=4]="Bottom";a[a.Left=8]="Left"})(IntegralUIAnchorStyle=exports.IntegralUIAnchorStyle||(exports.IntegralUIAnchorStyle={}));var IntegralUIObjectState;(function(a){a[a.normal=0]="normal";a[a.hovered=1]="hovered";a[a.selected=2]="selected";a[a.focused=4]="focused";a[a.disabled=8]="disabled"})(IntegralUIObjectState=exports.IntegralUIObjectState||(exports.IntegralUIObjectState={}));var IntegralUIOrientation;
(function(a){a[a.Horizontal=0]="Horizontal";a[a.Vertical=1]="Vertical"})(IntegralUIOrientation=exports.IntegralUIOrientation||(exports.IntegralUIOrientation={}));var IntegralUIScrollMode;(function(a){a[a.Horizontal=0]="Horizontal";a[a.Vertical=1]="Vertical"})(IntegralUIScrollMode=exports.IntegralUIScrollMode||(exports.IntegralUIScrollMode={}));var IntegralUISelectionMode;
(function(a){a[a.None=0]="None";a[a.One=1]="One";a[a.MultiSimple=2]="MultiSimple";a[a.MultiExtended=3]="MultiExtended"})(IntegralUISelectionMode=exports.IntegralUISelectionMode||(exports.IntegralUISelectionMode={}));var IntegralUISortOrder;(function(a){a[a.None=0]="None";a[a.Ascending=1]="Ascending";a[a.Descending=2]="Descending"})(IntegralUISortOrder=exports.IntegralUISortOrder||(exports.IntegralUISortOrder={}));var IntegralUITabStripPlacement;
(function(a){a[a.Top=0]="Top";a[a.Right=1]="Right";a[a.Middle=2]="Middle";a[a.Bottom=3]="Bottom";a[a.Left=4]="Left"})(IntegralUITabStripPlacement=exports.IntegralUITabStripPlacement||(exports.IntegralUITabStripPlacement={}));var IntegralUIVisibility;(function(a){a[a.None=0]="None";a[a.Hover=1]="Hover";a[a.Click=2]="Click";a[a.Always=3]="Always"})(IntegralUIVisibility=exports.IntegralUIVisibility||(exports.IntegralUIVisibility={}));
var IntegralUIBaseComponent=function(){function a(a){this.commonService=a;this.ctrlState=IntegralUIObjectState.normal;this.options={};this.generalClassName="";this.defaultStyle={};this.ctrlClass=[];this.styleChanged=new core_1.EventEmitter;this.stateChanged=new core_1.EventEmitter;this.options={currentStyle:null}}Object.defineProperty(a.prototype,"state",{get:function(){return this.ctrlState},set:function(a){this.ctrlState!=a&&(this.ctrlState=a,this.updateControlClass(),this.processStateChanged(),
this.stateChanged.emit(this))},enumerable:!0,configurable:!0});a.prototype.ngOnInit=function(){this.generalClassName="iui-control";this.initStyle()};a.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass()};a.prototype.processStateChanged=
function(){};a.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push(this.generalClassName);this.options.currentStyle&&(this.ctrlClass.push(this.options.currentStyle.general.normal),this.state&IntegralUIObjectState.disabled?this.ctrlClass.push(this.options.currentStyle.general.disabled):this.state&IntegralUIObjectState.focused?this.ctrlClass.push(this.options.currentStyle.general.focused):this.state&IntegralUIObjectState.selected?this.ctrlClass.push(this.options.currentStyle.general.selected):
this.state&IntegralUIObjectState.hovered&&this.ctrlClass.push(this.options.currentStyle.general.hovered))};a.prototype.getControlClass=function(){return this.ctrlClass};a.prototype.getDefaultStyle=function(){return{general:this.getDefaultGeneralStyle()}};a.prototype.getDefaultGeneralStyle=function(){return{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected}};
a.prototype.getGeneralStyle=function(a){if(this.commonService){if(this.commonService.isString(a))return a;if(a)return{disabled:this.commonService.isFieldAvailable(a.disabled,this.generalClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.generalClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.generalClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.generalClassName),selected:this.commonService.isFieldAvailable(a.selected,
this.generalClassName+"-selected")}}return this.getDefaultGeneralStyle()};a.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general)}:this.getDefaultStyle()};return a}();__decorate([core_1.Input(),__metadata("design:type",Object)],IntegralUIBaseComponent.prototype,"controlStyle",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],IntegralUIBaseComponent.prototype,"data",void 0);
__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUIBaseComponent.prototype,"name",void 0);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUIBaseComponent.prototype,"state",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIBaseComponent.prototype,"styleChanged",void 0);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIBaseComponent.prototype,"stateChanged",void 0);IntegralUIBaseComponent=__decorate([core_1.Component({selector:"iui-base",template:""}),__metadata("design:paramtypes",[integralui_common_service_1.IntegralUICommonService])],IntegralUIBaseComponent);exports.IntegralUIBaseComponent=IntegralUIBaseComponent;
var IntegralUIBaseService=function(){function a(){this.componentRef=null}a.prototype.getComponent=function(){return this.componentRef};a.prototype.setComponent=function(a){this.componentRef=a};return a}();IntegralUIBaseService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],IntegralUIBaseService);exports.IntegralUIBaseService=IntegralUIBaseService;
var IntegralUIDragWindow=function(){function a(){this.iconClass="";this.position={x:0,y:0};this.size={width:0,height:0};this.title="";this.display="block"}a.prototype.updatePos=function(a){a&&(a["class"]&&(this.iconClass=a["class"]),this.position={x:a.left,y:a.top},a.text&&(this.title=a.text))};return a}();__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUIDragWindow.prototype,"iconClass",void 0);
__decorate([core_1.Input(),__metadata("design:type",Object)],IntegralUIDragWindow.prototype,"position",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],IntegralUIDragWindow.prototype,"size",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUIDragWindow.prototype,"title",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUIDragWindow.prototype,"display",void 0);
IntegralUIDragWindow=__decorate([core_1.Component({selector:"iui-dragwin",template:"\n        <div class=\"iui-dragwin\" data-element=\"drag-window\" [ngStyle]=\"{ 'display': display, 'top': position.y + 'px', 'left': position.x + 'px' }\">\n            <span [ngClass]=\"iconClass\"></span>\n            <span class='iui-dragwin-title'>{{title}}</span>\n        </div>\n    "})],IntegralUIDragWindow);exports.IntegralUIDragWindow=IntegralUIDragWindow;
var IntegralUIItem=function(a){function b(e,b){var c=a.call(this,b)||this;c.elemRef=e;c.commonService=b;c.itemPos={top:0,left:0};c.positionType="static";c.contentClass=[];c.click=new core_1.EventEmitter;c.mouseDown=new core_1.EventEmitter;c.mouseUp=new core_1.EventEmitter;c.mouseEnter=new core_1.EventEmitter;c.mouseMove=new core_1.EventEmitter;c.mouseLeave=new core_1.EventEmitter;return c}__extends(b,a);b.prototype.ngOnInit=function(){this.generalClassName="iui-item";this.contentClassName=this.generalClassName+
"-content";this.initStyle()};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"}};this.updateStyle(this.controlStyle);
this.updateControlClass();this.updateContentClass()};b.prototype.updateContentClass=function(){this.contentClass.length=0;this.contentClass.push(this.contentClassName);this.contentClass.push(this.options.currentStyle.content.normal);this.state&IntegralUIObjectState.disabled?this.contentClass.push(this.options.currentStyle.content.disabled):this.state&IntegralUIObjectState.focused?this.contentClass.push(this.options.currentStyle.content.focused):this.state&IntegralUIObjectState.selected?this.contentClass.push(this.options.currentStyle.content.selected):
this.state&IntegralUIObjectState.hovered&&this.contentClass.push(this.options.currentStyle.content.hovered)};b.prototype.getContentClass=function(){return this.contentClass};b.prototype.getContentStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.contentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.contentClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.contentClassName+
"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.contentClassName),selected:this.commonService.isFieldAvailable(a.selected,this.contentClassName+"-selected")}:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}};b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),content:this.getContentStyle(a.content)}:
{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}}};b.prototype.processStateChanged=function(){this.updateContentClass()};
b.prototype.onClick=function(a){this.click.emit(a);a.stopPropagation()};b.prototype.onMouseDown=function(a){this.mouseDown.emit(a);a.stopPropagation()};b.prototype.onMouseUp=function(a){this.mouseUp.emit(a);a.stopPropagation()};b.prototype.onMouseEnter=function(a){this.state|=IntegralUIObjectState.hovered;this.mouseEnter.emit(a);a.stopPropagation()};b.prototype.onMouseMove=function(a){this.mouseMove.emit(a);a.stopPropagation()};b.prototype.onMouseLeave=function(a){this.state&=~IntegralUIObjectState.hovered;
this.mouseLeave.emit(a);a.stopPropagation()};b.prototype.getContentSize=function(){var a={width:0,height:0};this.contentElem&&(a=this.commonService.getMargin(this.contentElem.nativeElement),a={width:this.contentElem.nativeElement.offsetWidth+(a.left+a.right),height:this.contentElem.nativeElement.offsetHeight+(a.top+a.bottom)/2});return a};b.prototype.getIconStatus=function(){return this.icon?"inline-block":"none"};b.prototype.getMargin=function(){return this.elemRef?this.commonService.getMargin(this.elemRef.nativeElement.firstElementChild):
{top:0,right:0,bottom:0,left:0}};b.prototype.getPageRect=function(){var a={top:0,right:0,bottom:0,left:0};this.elemRef&&(a=this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild));return a};b.prototype.getSize=function(){var a={width:0,height:0};this.elemRef&&(a=this.commonService.getMargin(this.elemRef.nativeElement.firstElementChild),a={width:this.elemRef.nativeElement.firstElementChild.offsetWidth+(a.left+a.right),height:this.elemRef.nativeElement.firstElementChild.offsetHeight+
(a.top+a.bottom)/2});return a};b.prototype.resetPos=function(){this.updateLayout("static",{x:"auto",y:"auto"})};b.prototype.updateLayout=function(a,b){this.positionType=a;this.itemPos={top:b.y,left:b.x}};b.prototype.updatePos=function(a){this.updateLayout("absolute",a)};return b}(IntegralUIBaseComponent);__decorate([core_1.ViewChild("content",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],IntegralUIItem.prototype,"contentElem",void 0);
__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUIItem.prototype,"icon",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUIItem.prototype,"text",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIItem.prototype,"click",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIItem.prototype,"mouseDown",void 0);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIItem.prototype,"mouseUp",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIItem.prototype,"mouseEnter",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIItem.prototype,"mouseMove",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIItem.prototype,"mouseLeave",void 0);
IntegralUIItem=__decorate([core_1.Component({selector:"iui-item",template:'\n        <div [ngClass]="getControlClass()" (click)="onClick($event)" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)" (mouseenter)="onMouseEnter($event)" (mousemove)="onMouseMove($event)" (mouseleave)="onMouseLeave($event)" [ngStyle]="{ \'position\': positionType, \'top\': itemPos.top + \'px\', \'left\': itemPos.left + \'px\' }" #content>\n            <span *ngIf="icon" class="iui-item-icon" [ngClass]="icon" [style.display]="getIconStatus()"></span>\n            <span *ngIf="text" class="iui-item-label">{{text}}</span>\n            <ng-content></ng-content>\n        </div>\n    ',
inputs:["controlStyle","data","name","state"],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],IntegralUIItem);exports.IntegralUIItem=IntegralUIItem;
var IntegralUIFocus=function(){function a(a){this.elemRef=a;this.settings=!1}Object.defineProperty(a.prototype,"settings",{get:function(){return this.isFocused},set:function(a){if(this.isFocused!=a&&(this.isFocused=a))var b=this,d=setTimeout(function(){b.elemRef.nativeElement.focus();clearTimeout(d)},1)},enumerable:!0,configurable:!0});return a}();
__decorate([core_1.Input("iuiFocus"),__metadata("design:type",Boolean),__metadata("design:paramtypes",[Boolean])],IntegralUIFocus.prototype,"settings",null);IntegralUIFocus=__decorate([core_1.Directive({selector:"[iuiFocus]"}),__metadata("design:paramtypes",[core_1.ElementRef])],IntegralUIFocus);exports.IntegralUIFocus=IntegralUIFocus;
var IntegralUIHeaderItem=function(a){function b(b,d){var c=a.call(this,b,d)||this;c.elemRef=b;c.commonService=d;c.expandHorizontalClass=[];c.expandVerticalClass=[];c.expandArrowBottomLeftClass=[];c.expandArrowBottomRightClass=[];c.expandArrowVerticalClass=[];c.expandArrowTopLeftClass=[];c.expandArrowTopRightClass=[];c.animationType="";c.animationState="";c.expandClicked=new core_1.EventEmitter;return c}__extends(b,a);b.prototype.ngOnInit=function(){this.generalClassName="iui-header";this.expandBoxClassName=
this.generalClassName+"expand-box";this.contentClassName=this.generalClassName+"-content";this.initStyle()};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+
"-hovered",selected:this.contentClassName+"-selected"},expandBox:this.expandBoxClassName};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass()};b.prototype.getExpandVerticalClass=function(){this.expandVerticalClass.length=0;this.expandVerticalClass.push("iui-header-expand-box-vertical");this.state&IntegralUIObjectState.selected?this.expandVerticalClass.push("iui-header-expand-box-vertical-collapse"):this.expandVerticalClass.push("iui-header-expand-box-vertical-expand");
this.options.currentStyle.expandBox&&this.expandVerticalClass.push(this.options.currentStyle.expandBox);return this.expandVerticalClass};b.prototype.getExpandHorizontalClass=function(){this.expandHorizontalClass.length=0;this.expandHorizontalClass.push("iui-header-expand-box-horizontal");this.state&IntegralUIObjectState.selected?this.expandHorizontalClass.push("iui-header-expand-box-horizontal-collapse"):this.expandHorizontalClass.push("iui-header-expand-box-horizontal-expand");this.options.currentStyle.expandBox&&
this.expandHorizontalClass.push(this.options.currentStyle.expandBox);return this.expandHorizontalClass};b.prototype.getExpandArrowBottomLeftClass=function(){this.expandArrowBottomLeftClass.length=0;this.expandArrowBottomLeftClass.push("iui-header-expand-box-arrow-bottom-left");"expand"==this.animationState?this.expandArrowBottomLeftClass.push("iui-header-expand-box-arrow-bottom-left-collapse"):this.expandArrowBottomLeftClass.push("iui-header-expand-box-arrow-bottom-left-expand");this.options.currentStyle.expandBox&&
this.expandArrowBottomLeftClass.push(this.options.currentStyle.expandBox);return this.expandArrowBottomLeftClass};b.prototype.getExpandArrowBottomRightClass=function(){this.expandArrowBottomRightClass.length=0;this.expandArrowBottomRightClass.push("iui-header-expand-box-arrow-bottom-right");"expand"==this.animationState?this.expandArrowBottomRightClass.push("iui-header-expand-box-arrow-bottom-right-collapse"):this.expandArrowBottomRightClass.push("iui-header-expand-box-arrow-bottom-right-expand");
this.options.currentStyle.expandBox&&this.expandArrowBottomRightClass.push(this.options.currentStyle.expandBox);return this.expandArrowBottomRightClass};b.prototype.getExpandArrowVerticalClass=function(){this.expandArrowVerticalClass.length=0;this.expandArrowVerticalClass.push("iui-header-expand-box-arrow-vertical");"expand"==this.animationState?this.expandArrowVerticalClass.push("iui-header-expand-box-arrow-vertical-collapse"):this.expandArrowVerticalClass.push("iui-header-expand-box-arrow-vertical-expand");
this.options.currentStyle.expandBox&&this.expandArrowVerticalClass.push(this.options.currentStyle.expandBox);return this.expandArrowVerticalClass};b.prototype.getExpandArrowTopLeftClass=function(){this.expandArrowTopLeftClass.length=0;this.expandArrowTopLeftClass.push("iui-header-expand-box-arrow-top-left");"expand"==this.animationState?this.expandArrowTopLeftClass.push("iui-header-expand-box-arrow-top-left-expand"):this.expandArrowTopLeftClass.push("iui-header-expand-box-arrow-top-left-collapse");
this.options.currentStyle.expandBox&&this.expandArrowTopLeftClass.push(this.options.currentStyle.expandBox);return this.expandArrowTopLeftClass};b.prototype.getExpandArrowTopRightClass=function(){this.expandArrowTopRightClass.length=0;this.expandArrowTopRightClass.push("iui-header-expand-box-arrow-top-right");"expand"==this.animationState?this.expandArrowTopRightClass.push("iui-header-expand-box-arrow-top-right-expand"):this.expandArrowTopRightClass.push("iui-header-expand-box-arrow-top-right-collapse");
this.options.currentStyle.expandBox&&this.expandArrowTopRightClass.push(this.options.currentStyle.expandBox);return this.expandArrowTopRightClass};b.prototype.expandBoxClicked=function(a){1==a.buttons&&this.expandClicked.emit(null)};b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),content:this.getContentStyle(a.content),expandBox:this.commonService.isFieldAvailable(a.expandBox,this.expandBoxClassName)}:{general:{disabled:this.defaultStyle.general.disabled,
focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},expandBox:this.defaultStyle.expandBox}};return b}(IntegralUIItem);
__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUIHeaderItem.prototype,"animationType",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUIHeaderItem.prototype,"animationState",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIHeaderItem.prototype,"expandClicked",void 0);
IntegralUIHeaderItem=__decorate([core_1.Component({selector:"iui-header",template:'\n        <div [ngClass]="getControlClass()" (click)="onClick($event)" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)" (mouseenter)="onMouseEnter($event)" (mousemove)="onMouseMove($event)" (mouseleave)="onMouseLeave($event)" #content>\n            <span *ngIf="icon" class="iui-item-icon" [ngClass]="icon" [style.display]="getIconStatus()"></span>\n            <span *ngIf="text" class="iui-item-label">{{text}}</span>\n            <div class="iui-header-expand-box" [ngStyle]="{ display: animationType==\'plus-minus\' ? \'block\' : \'none\' }" (mousedown)="expandBoxClicked($event)">\n                <span class="iui-header-expand-box-vertical" [ngClass]="getExpandVerticalClass()"></span>\n                <span class="iui-header-expand-box-horizontal" [ngClass]="getExpandHorizontalClass()"></span>\n            </div>\n            <div class="iui-header-expand-box-arrow" [ngStyle]="{ display: animationType==\'arrow\' ? \'block\' : \'none\' }" (mousedown)="expandBoxClicked($event)">\n                <span class="iui-header-expand-box-arrow-bottom-left" [ngClass]="getExpandArrowBottomLeftClass()"></span>\n                <span class="iui-header-expand-box-arrow-bottom-right" [ngClass]="getExpandArrowBottomRightClass()"></span>\n                \x3c!-- <span class="iui-header-expand-box-arrow-vertical" [ngClass]="getExpandArrowVerticalClass()"></span> --\x3e\n                <span class="iui-header-expand-box-arrow-top-left" [ngClass]="getExpandArrowTopLeftClass()"></span>\n                <span class="iui-header-expand-box-arrow-top-right" [ngClass]="getExpandArrowTopRightClass()"></span>\n            </div>\n            <ng-content></ng-content>\n        </div>\n    ',inputs:"controlStyle data icon name state text".split(" "),
outputs:"click mouseDown mouseEnter mouseLeave mouseMove mouseUp".split(" "),encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],IntegralUIHeaderItem);exports.IntegralUIHeaderItem=IntegralUIHeaderItem;
var IntegralUITComponent=function(){function a(){this.tvData="";this.tvTimer=null;this.tvCycle=6E4;this.tvDefault="none"}a.prototype.crpar=function(){return["si","Tri","Ver","on","al "]};a.prototype.crtr=function(a){return a[1]+a[4]+a[2]+a[0]+a[3]};a.prototype.ngOnInit=function(){var a=this;a.tvData=a.crtr(a.crpar());a.tvStyle=a.tvDefault;a.tvTimer=setInterval(function(){a.tvStyle="block";var b=setTimeout(function(){a.tvStyle=a.tvDefault;clearTimeout(b)},3E3)},a.tvCycle)};a.prototype.ngOnDestroy=
function(){this.tvTimer&&clearInterval(this.tvTimer)};return a}();__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUITComponent.prototype,"tvStyle",void 0);
IntegralUITComponent=__decorate([core_1.Component({selector:"iui-tc",template:'\n        <style>\n            .tr-cmp\n            {\n            \tbackground: white;\n            \tcolor: #c60d0d;\n            \tborder: thin solid black;\n            \tpadding: 5px;\n            \tposition: absolute;\n            \ttop: 0;\n            \tleft: 0;\n            \tz-index: 999;\n            }\n        </style>\n\t\t<div class="tr-cmp" [ngStyle]="{ \'display\': tvStyle }">{{tvData}}</div>\n\t'}),__metadata("design:paramtypes",
[])],IntegralUITComponent);exports.IntegralUITComponent=IntegralUITComponent;