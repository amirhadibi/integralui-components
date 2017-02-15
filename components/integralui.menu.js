/*
  filename: integralui.menu.js
  version : 0.7.524 BETA
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(c,a){function d(){this.constructor=c}for(var b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);c.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)},__decorate=this&&this.__decorate||function(c,a,d,b){var f=arguments.length,e=3>f?a:null===b?b=Object.getOwnPropertyDescriptor(a,d):b,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(c,a,d,b);else for(var h=c.length-1;0<=h;h--)if(g=c[h])e=(3>f?g(e):3<f?g(a,d,e):
g(a,d))||e;return 3<f&&e&&Object.defineProperty(a,d,e),e},__metadata=this&&this.__metadata||function(c,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(c,a)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_menuitem_1=require("../components/integralui.menuitem"),IntegralUIMenu=
function(c){function a(a,b,f,e,g,h){c.call(this,e);this.dataService=a;this.elemRef=b;this.elemRenderer=f;this.commonService=e;this.cmpResolver=g;this.baseService=h;this.trialRef=null;this.itemClick=new core_1.EventEmitter}__extends(a,c);a.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init([{data:this.items}]);this.generalClassName="iui-menu";this.initStyle()};a.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);
d&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(d));clearTimeout(b)},100)};a.prototype.ngAfterContentInit=function(){this.itemList=this.contentList.toArray();this.updateLayout()};a.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};a.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};a.prototype.invokeMethod=function(a,b){switch(a){case "ITEM_CLICK":this.itemClick.emit({event:b.event,
item:this.getItemFromComponent(b.cmp)})}};a.prototype.updateLayout=function(){};__decorate([core_1.ContentChildren(integralui_menuitem_1.IntegralUIMenuItem),__metadata("design:type",core_1.QueryList)],a.prototype,"contentList",void 0);__decorate([core_1.ViewChild("content",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],a.prototype,"contentRef",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],a.prototype,"appRef",void 0);__decorate([core_1.Input(),
__metadata("design:type",Array)],a.prototype,"items",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"itemClick",void 0);return a=__decorate([core_1.Component({selector:"iui-menu",template:'\n\t\t<div [ngClass]="getControlClass()">\n\t\t\t<ul class="iui-menu-block" #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</ul>\n\t\t</div>\n\t',inputs:["controlStyle","data","state"],providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]}),
__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,core_1.ElementRef,core_1.Renderer,integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver,integralui_core_1.IntegralUIBaseService])],a)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIMenu=IntegralUIMenu;