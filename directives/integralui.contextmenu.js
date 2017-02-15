/*
  filename: integralui.contextmenu.js
  version : 0.7.524 BETA
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(c,b){function a(){this.constructor=c}for(var e in b)b.hasOwnProperty(e)&&(c[e]=b[e]);c.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(c,b,a,e){var g=arguments.length,d=3>g?b:null===e?e=Object.getOwnPropertyDescriptor(b,a):e,f;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(c,b,a,e);else for(var h=c.length-1;0<=h;h--)if(f=c[h])d=(3>g?f(d):3<g?f(b,a,d):
f(b,a))||d;return 3<g&&d&&Object.defineProperty(b,a,d),d},__metadata=this&&this.__metadata||function(c,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(c,b)},core_1=require("@angular/core"),integralui_core_1=require("../components/integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_menuitem_1=require("../components/integralui.menuitem"),
IntegralUIContextMenuComponent=function(c){function b(a,b,g,d,f){c.call(this,g);this.dataService=a;this.elemRef=b;this.commonService=g;this.cmpResolver=d;this.baseService=f;this.blockDisplay="none";this.blockElemHeight=this.blockElemWidth="0";this.blockOverflow="hidden";this.blockOpacity=0;this.trialRef=null;this.position={x:"0",y:"0"};this.itemClick=new core_1.EventEmitter;this.closed=new core_1.EventEmitter;this.itemList=[]}__extends(b,c);b.prototype.ngOnInit=function(){this.baseService.setComponent(this);
this.dataService.init(this.items);this.generalClassName="iui-contextmenu";this.initStyle()};b.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var e=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);e&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(e));clearTimeout(b)},100)};b.prototype.ngAfterContentInit=function(){var a=this,b=setTimeout(function(){a.elemRef.nativeElement.firstElementChild.focus();clearTimeout(b)},1)};b.prototype.ngOnDestroy=
function(){this.trialRef&&this.trialRef.destroy()};b.prototype.onBlur=function(a){this.closed.emit(null)};b.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};b.prototype.invokeMethod=function(a,b){switch(a){case "ITEM_CLICK":this.itemClick.emit({event:b.event,item:this.getItemFromComponent(b.cmp)})}};b.prototype.open=function(){var a=this;if(a.items){var b=
17*a.items.length,c=0,d=0;a.blockDisplay="block";var f=setInterval(function(){c<b?(d=0==d?1:d+5,c+=d,a.blockElemHeight=c+"px",a.blockOpacity=c/b):(a.blockElemHeight="auto",a.blockOverflow="visible",a.blockOpacity=1,clearInterval(f))},15)}};__decorate([core_1.ViewChild("content",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],b.prototype,"contentRef",void 0);__decorate([core_1.ContentChildren(integralui_menuitem_1.IntegralUIMenuItem),__metadata("design:type",core_1.QueryList)],
b.prototype,"contentList",void 0);__decorate([core_1.Input(),__metadata("design:type",Array)],b.prototype,"items",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],b.prototype,"position",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"itemClick",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"closed",void 0);return b=__decorate([core_1.Component({selector:"iui-contextmenu",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="{ \'top\': position.y, \'left\': position.x, \'height\': blockElemHeight, \'opacity\': blockOpacity }" (blur)="onBlur($event)" tabindex="999">\n\t\t<ul #content>\n\t\t\t\x3c!-- <iui-menuitem *ngFor="let item of items" [data]="item" [icon]="item.icon"  [text]="item.text" (itemMouseDown)="itemClicked($event)" [orientation]="vertical"></iui-menuitem> --\x3e\n\t\t\t<iui-menuitem *ngFor="let item of items" [data]="item" [icon]="item.icon"  [text]="item.text" [orientation]="\'vertical\'"></iui-menuitem>\n\t\t</ul>\n\t',
inputs:["controlStyle","data","state"],providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,core_1.ElementRef,integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver,integralui_core_1.IntegralUIBaseService])],b)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIContextMenuComponent=IntegralUIContextMenuComponent;
var IntegralUIContextMenu=function(){function c(b,a,c){this.elemRef=b;this.viewContainer=a;this.cmpResolver=c;this.eventList=[];this.cmpRef=null;this.itemClick=new core_1.EventEmitter}c.prototype.ngOnDestroy=function(){this.closeMenu()};c.prototype.closeMenu=function(){this.cmpRef&&(this.eventList&&this.eventList.forEach(function(b){return b.unsubscribe()}),this.cmpRef.destroy())};c.prototype.onMouseDown=function(b){b.preventDefault();var a=this;if(a.settings.appRef){a.closeMenu();var c=a.cmpResolver.resolveComponentFactory(IntegralUIContextMenuComponent);
c&&(a.cmpRef=a.settings.appRef.createComponent(c),a.cmpRef&&(c=null,a.cmpRef._component?c=a.cmpRef._component:a.cmpRef._hostElement&&(c=a.cmpRef._hostElement.component),c&&(c.position={x:b.pageX+"px",y:b.pageY+"px"},c.items=a.settings.items,c.open(),a.eventList.push(c.itemClick.subscribe(function(b){a.itemClick.emit(b);a.closeMenu()})),a.eventList.push(c.closed.subscribe(function(b){a.closeMenu()})))))}};__decorate([core_1.Input("iuiContextMenu"),__metadata("design:type",Object)],c.prototype,"settings",
void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],c.prototype,"itemClick",void 0);__decorate([core_1.HostListener("contextmenu",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],c.prototype,"onMouseDown",null);return c=__decorate([core_1.Directive({selector:"[iuiContextMenu]"}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.ViewContainerRef,core_1.ComponentFactoryResolver])],c)}();
exports.IntegralUIContextMenu=IntegralUIContextMenu;