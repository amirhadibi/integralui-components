/*
  filename: integralui.listbox.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(d,b){function a(){this.constructor=d}for(var c in b)b.hasOwnProperty(c)&&(d[c]=b[c]);d.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(d,b,a,c){var g=arguments.length,e=3>g?b:null===c?c=Object.getOwnPropertyDescriptor(b,a):c,h;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(d,b,a,c);else for(var f=d.length-1;0<=f;f--)if(h=d[f])e=(3>g?h(e):3<g?h(b,a,e):
h(b,a))||e;return 3<g&&e&&Object.defineProperty(b,a,e),e},__metadata=this&&this.__metadata||function(d,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_dragdrop_service_1=require("../services/integralui.dragdrop.service"),
integralui_filter_service_1=require("../services/integralui.filter.service"),integralui_base_list_1=require("./integralui.base.list"),integralui_listitem_1=require("./integralui.listitem"),IntegralUIListBox=function(d){function b(a,b,g,e,h,f,k,l){var c=d.call(this,a,b,g,e,h,f)||this;c.dataService=a;c.dragDropService=b;c.elemRef=g;c.elemRenderer=e;c.commonService=h;c.filterService=f;c.cmpResolver=k;c.baseService=l;c.trialRef=null;c.itemList=[];return c}__extends(b,d);b.prototype.ngOnInit=function(){this.baseService.setComponent(this);
this.updateData();this.updateCurrentList();this.generalClassName="iui-listbox";this.itemClassName="iui-listitem";this.itemContentClassName=this.itemClassName+"-content";this.initStyle()};b.prototype.updateData=function(){this.dataService.init([{data:this.items}])};b.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var c=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);c&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(c));clearTimeout(b)},
100);a.updateLayout()};b.prototype.ngAfterContentInit=function(){};b.prototype.ngOnDestroy=function(){this.removeDropMark();this.updateTimer&&clearTimeout(this.updateTimer);this.trialRef&&this.trialRef.destroy()};b.prototype.addItem=function(a){this.callEventAdd("add",a)};b.prototype.clearItems=function(){this.dataService.clear();this.clear.emit(null)};b.prototype.insertItemAt=function(a,b){this.callEventAdd("at",a,b)};b.prototype.removeItemAt=function(a){return this.callEventRemove(null,a)};b.prototype.updateCurrentList=
function(){this.currentList.length=0;var a=this.dataService.getList();if(a){this.applySorting(a);for(var b=0;b<a.length;b++)this.addItemToCurrentList(a[b])}};b.prototype.addItemToCurrentList=function(a){a.type="item";a[this.options.dataFields.id]||(a[this.options.dataFields.id]=this.commonService.getUniqueId());this.isItemAllowed(a)&&this.currentList.push({data:a})};b.prototype.updateScrollItemList=function(){for(var a=this.scrollItemList.length=0,b=this.currentIndex;b<this.currentList.length&&b<
this.currentIndex+this.visibleRange;b++,a++){var d={data:this.currentList[b].data,index:b-this.currentIndex,style:{},tabIndex:a};this.updateItemStyle(d);this.scrollItemList.push(d)}};b.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.updateItemList(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};b.prototype.updateItemList=function(){this.contentList&&(this.itemList=this.contentList.toArray())};b.prototype.updateBlockSize=function(){this.blockSize=
{width:this.contentElem.nativeElement.offsetWidth,height:this.contentElem.nativeElement.offsetHeight}};b.prototype.getContentSize=function(){return this.contentElem?{width:this.contentElem.nativeElement.offsetWidth,height:this.contentElem.nativeElement.offsetHeight}:{width:0,height:0}};b.prototype.getItemElemList=function(){return this.itemElems?this.itemElems.toArray():null};b.prototype.updateLayout=function(){var a=this;a.allowUpdate&&(a.updateTimer=setTimeout(function(){a.updateCurrentList();a.clientRect=
{width:a.elemRef.nativeElement.firstElementChild.clientWidth,height:a.elemRef.nativeElement.firstElementChild.clientHeight};a.virtualMode&&a.updateScrollItemList();var b=setTimeout(function(){a.updateVisibleRange();a.virtualMode&&a.updateScrollItemList();var c=setTimeout(function(){a.updateBlockSize();var b=a.getItemElemList();a.avgItemHeight=0;if(b&&0<b.length){for(var d=0,f=0;f<b.length;f++)d+=b[f].nativeElement.offsetHeight;a.avgItemHeight=Math.floor(d/b.length)}a.updateScrollSize();a.refresh();
a.updateComplete.emit(null);clearTimeout(c)},1);clearTimeout(b)},50);clearTimeout(a.updateTimer)},100))};b.prototype.resetRefresh=function(){this.refreshTimer&&clearTimeout(this.refreshTimer);this.refreshTimer=null};b.prototype.refresh=function(a){this.resetRefresh();if(0!=this.virtualMode)for(this.updateControlClass(),a=0;a<this.scrollItemList.length;a++)this.updateItemStyle(this.scrollItemList[a]);else for(this.updateItemList(),this.clearComponentSelection(),a=0;a<this.currentSelectedItems.length;a++){var b=
this.getItemCurrentIndex(this.currentSelectedItems[a]);this.isComponentIndexInRange(b)&&(this.itemList[b].state|=integralui_core_1.IntegralUIObjectState.selected)}};return b}(integralui_base_list_1.IntegralUIBaseList);__decorate([core_1.ContentChildren(integralui_listitem_1.IntegralUIListItem),__metadata("design:type",core_1.QueryList)],IntegralUIListBox.prototype,"contentList",void 0);
__decorate([core_1.ViewChild("content",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],IntegralUIListBox.prototype,"contentRef",void 0);__decorate([core_1.ViewChild("content",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],IntegralUIListBox.prototype,"contentElem",void 0);__decorate([core_1.ViewChildren("itemElem",{read:core_1.ElementRef}),__metadata("design:type",core_1.QueryList)],IntegralUIListBox.prototype,"itemElems",void 0);
__decorate([core_1.ContentChild(core_1.TemplateRef),__metadata("design:type",Object)],IntegralUIListBox.prototype,"itemTemplate",void 0);
IntegralUIListBox=__decorate([core_1.Component({selector:"iui-listbox",template:'\n\t\t<div [ngClass]="getControlClass()" (mousewheel)="processMouseWheel($event)" (mouseenter)="onCtrlMouseEnter($event)" (mouseleave)="onCtrlMouseLeave($event)" (dragleave)="ctrlDragLeave($event)" (dragover)="ctrlDragOver($event)" (drop)="ctrlDragDrop($event)" (scroll)="onScroll($event)" [ngStyle]="{ overflow: virtualMode != false ? \'hidden\' : \'auto\' }">\n            <span [ngSwitch]="virtualMode" #content>\n                <span *ngSwitchCase="true">\n\t                <ul style="margin:0;padding:0;" [ngStyle]="{ width: contentSize.width + \'px\', height: contentSize.height + \'px\' }">\n\t\t\t\t        <li [ngClass]="item.style.general" *ngFor="let item of scrollItemList; let i = index" (click)="itemClickEvent($event, item)" (mousedown)="itemMouseDown($event, item)" (mouseup)="itemMouseUp($event, item)" (mouseenter)="itemMouseEnter($event, item)" (mouseleave)="itemMouseLeave($event, item)" draggable="true" (dragstart)="itemDragStart($event, item)" (dragover)="itemDragOver($event, item, i, true)" (drop)="itemDragDrop($event, item)" #itemElem>\n\t\t\t\t            <div [ngClass]="item.style.content" tabindex="{{item.tabIndex}}" [iuiFocus]="item.data == this.currentFocusItem" (focus)="itemGotFocus(item)" (blur)="itemLostFocus(item)" (keydown)="itemKeyDown($event, item)" (keypress)="itemKeyPress($event, item)" (keyup)="itemKeyUp($event, item)">\n\t\t\t\t\t\t\t\t<span [iuiTemplateOutlet]="itemTemplate" [iuiTemplateOutletContext]="{$implicit: (item.data)}"></span>\n\t\t\t\t            </div>\n\t\t\t\t        </li>\n\t\t\t\t    </ul>\n\t\t            <iui-scrollbar *ngIf="isVerScrollVisible()" [value]="currentScrollPos.y" [max]="maxScrollPos.y" [largeChange]="scrollLargeChange.y" [height]="scrollBarSize.height" (valueChanged)="onVerticalScrollChanged($event)" (scrollStart)="onVerticalScrollStart($event)" (scrollEnd)="onVerticalScrollEnd($event)" #verScroll></iui-scrollbar>\n\t\t            <iui-scrollbar *ngIf="isHorScrollVisible()" [orientation]="horScrollOrientation" [value]="currentScrollPos.x" [max]="maxScrollPos.x" [width]="scrollBarSize.width" (valueChanged)="onHorizontalScrollChanged($event)" (scrollStart)="onHorizontalScrollStart($event)" (scrollEnd)="onHorizontalScrollEnd($event)" #horScroll></iui-scrollbar>\n\t\t            <div *ngIf="isVerScrollVisible() && isHorScrollVisible()" style="background:#f5f5f5;position:absolute;right:0;bottom:0;width:16px;height:16px;"></div>\n\t            </span>\n                <span *ngSwitchDefault>\n\t\t\t\t\t<ul style="margin:0;padding:0;" #content>\n\t\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t\t</ul>\n\t            </span>\n            </span>\n\t\t</div>\n\t',inputs:"allowDrag allowDrop allowFilter allowFocus appRef beforeEdit controlStyle data items name selectedItem selectionMode sorting state virtualMode".split(" "),
outputs:"afterSelect beforeSelect change clear dragDrop dragOver itemAdding itemAdded itemRemoving itemRemoved keyDown keyPress keyUp loadComplete scrollPosChanged selectionChanged updateComplete".split(" "),providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,integralui_dragdrop_service_1.IntegralUIDragDropService,core_1.ElementRef,core_1.Renderer,integralui_common_service_1.IntegralUICommonService,
integralui_filter_service_1.IntegralUIFilterService,core_1.ComponentFactoryResolver,integralui_core_1.IntegralUIBaseService])],IntegralUIListBox);exports.IntegralUIListBox=IntegralUIListBox;