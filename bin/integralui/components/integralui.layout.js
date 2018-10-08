﻿/*
  filename: integralui.layout.js
  version : 1.1.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(d,b){function a(){this.constructor=d}for(var e in b)b.hasOwnProperty(e)&&(d[e]=b[e]);d.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(d,b,a,e){var c=arguments.length,g=3>c?b:null===e?e=Object.getOwnPropertyDescriptor(b,a):e,k;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)g=Reflect.decorate(d,b,a,e);else for(var f=d.length-1;0<=f;f--)if(k=d[f])g=(3>c?k(g):3<c?k(b,a,g):
k(b,a))||g;return 3<c&&g&&Object.defineProperty(b,a,g),g},__metadata=this&&this.__metadata||function(d,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),IntegralUILayout=function(d){function b(a,e,b){var c=d.call(this,b)||
this;c.dataService=a;c.elemRef=e;c.commonService=b;c.currentList=[];c.dataPanels=[];c.fullList=[];c.options={dataFields:null};c.updateTimer=null;c.updateOptions();return c}__extends(b,d);Object.defineProperty(b.prototype,"data",{get:function(){return this.ctrlData},set:function(a){(this.ctrlData=a)&&a[this.options.dataFields.panels]&&(this.dataPanels=a[this.options.dataFields.panels],this.updateData());this.updateLayout()},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.updateData();
this.updateCurrentList();this.generalClassName="iui-layout";this.initStyle()};b.prototype.updateData=function(){this.dataService.init([{data:this.dataPanels}])};b.prototype.ngAfterContentChecked=function(){1==this.autoUpdate&&(this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight},this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=
this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height))};b.prototype.updateOptions=function(a){a?this.options={dataFields:null}:(this.options={dataFields:null},this.updateDataFields())};b.prototype.updateDataFields=function(a){this.options.dataFields=a?{enabled:a.enabled?a.enabled:"enabled",id:a.id?a.id:"id",objects:a.panels?a.panels:"panels",orientation:a.orientation?a.orientation:"orientation",panels:a.panels?a.panels:"panels",pid:a.pid?a.pid:"pid",size:a.size?
a.size:"size",visible:a.visible?a.visible:"visible"}:{enabled:"enabled",id:"id",objects:"panels",orientation:"orientation",panels:"panels",pid:"pid",size:"size",visible:"visible"};this.dataService&&this.dataService.updateDataFields(this.options.dataFields)};b.prototype.updateCurrentList=function(){var a=this;a.currentList.length=0;var b=a.dataService.getList();b&&b.forEach(function(c){a.addChildPanels(c,null)})};b.prototype.addChildPanels=function(a,b,c){var e=this,d=!0;if(!a[e.options.dataFields.panels])return d=
e.addPanelToCurrentList(a,b,c);d&&(b=a[e.options.dataFields.panels])&&b.forEach(function(b){e.addChildPanels(b,a[e.options.dataFields.id],c)});return d};b.prototype.addPanelToCurrentList=function(a,b,c){a.type="panel";a[this.options.dataFields.id]||(a[this.options.dataFields.id]=this.commonService.getUniqueId());b&&(a[this.options.dataFields.pid]=b);(b=this.isPanelAllowed(a))&&(c?this.fullList.push(a):this.currentList.push({data:a,position:{top:0,left:0},size:{width:0,height:0}}));return b};b.prototype.isPanelAllowed=
function(a){return!0};b.prototype.resetLayout=function(){this.updateTimer&&clearTimeout(this.updateTimer);this.updateTimer=null};b.prototype.updateLayout=function(){var a=this;a.resetLayout();a.updateTimer=setTimeout(function(){a.updateCurrentList();a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth,height:a.elemRef.nativeElement.firstElementChild.clientHeight};a.updatePanelLayout(a.data,{top:0,left:0,width:a.clientRect.width,height:a.clientRect.height});clearTimeout(a.updateTimer)},
100)};b.prototype.updatePanelLayout=function(a,b){var c=this.getCurrentPanelObj(a[this.options.dataFields.id]);c&&(c.position={top:b.top,left:b.left},c.size={width:b.width,height:b.height});c={top:b.top,left:b.left,width:b.width,height:b.height};var e=a[this.options.dataFields.orientation]?a[this.options.dataFields.orientation]:integralui_core_1.IntegralUIOrientation.Horizontal,d=1,f=a[this.options.dataFields.panels];if(f&&0<f.length)for(var h=0;h<f.length;h++){var l=f[h][this.options.dataFields.size]?
f[h][this.options.dataFields.size]:d/(f.length-h);l<=d&&(e==integralui_core_1.IntegralUIOrientation.Horizontal?c.height=b.height*l:c.width=b.width*l,this.updatePanelLayout(f[h],c),e==integralui_core_1.IntegralUIOrientation.Horizontal?c.top+=c.height:c.left+=c.width,d-=l)}};b.prototype.getCurrentPanelObj=function(a){for(var b=null,c=0;c<this.currentList.length;c++)if(this.currentList[c].data[this.options.dataFields.id]==a){b=this.currentList[c];break}return b};b.prototype.getControlStyle=function(){var a=
{};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};return b}(integralui_core_1.IntegralUIBaseComponent);__decorate([core_1.ContentChild(core_1.TemplateRef),__metadata("design:type",Object)],IntegralUILayout.prototype,"panelTemplate",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean)],IntegralUILayout.prototype,"autoUpdate",void 0);
__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],IntegralUILayout.prototype,"data",null);
IntegralUILayout=__decorate([core_1.Component({selector:"iui-layout",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()">\n\t        <div *ngFor="let panel of currentList; let i = index" style="background:#cecece;border:thin solid gray;position:absolute;" [ngStyle]="{ top: panel.position.top + \'px\', left: panel.position.left + \'px\', width: panel.size.width + \'px\', height: panel.size.height + \'px\' }" #panelElem>\n\t\t\t\t<span [iuiTemplateOutlet]="panelTemplate" [iuiTemplateOutletContext]="{$implicit: (panel.data)}"></span>\n\t        </div>\n\t\t</div>\n\t',inputs:"controlStyle data enabled name size state".split(" "),
providers:[integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],IntegralUILayout);exports.IntegralUILayout=IntegralUILayout;