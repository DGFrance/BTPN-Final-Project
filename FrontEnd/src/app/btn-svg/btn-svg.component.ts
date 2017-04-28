import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'btn-svg',
  template: ''
})

export class BtnSvgComponent {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/add.svg'));
   
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/menu.svg'));
   
    iconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/settings.svg'));
   
    iconRegistry.addSvgIcon(
      'power_settings_new',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/power_settings_new.svg'));
   
    iconRegistry.addSvgIcon(
      'sorting',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/sort_by_alpha.svg'));
   
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/search.svg'));
  
    iconRegistry.addSvgIcon(
      'filtering',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/filter_list.svg'));
   
    iconRegistry.addSvgIcon(
      'recent',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/restore.svg'));
  
    iconRegistry.addSvgIcon(
      'person',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/person.svg'));
   
    iconRegistry.addSvgIcon(
      'people',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/people.svg'));
   
    iconRegistry.addSvgIcon(
      'location',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/location.svg'));
    
    iconRegistry.addSvgIcon(
      'layers',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/layers.svg'));
   
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/home.svg'));

    iconRegistry.addSvgIcon(
      'radio_button_checked',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/radio_button_checked.svg'));
  
  iconRegistry.addSvgIcon(
      'chevron_right',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/chevron_right.svg'));
      
      iconRegistry.addSvgIcon(
      'ic_delete',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/ic_delete.svg'));

      iconRegistry.addSvgIcon(
      'ic_account',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/ic_account.svg'));

      iconRegistry.addSvgIcon(
      'ic_clear',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/ic_clear.svg'));

      iconRegistry.addSvgIcon(
      'ic_done',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/ic_done.svg'));

      iconRegistry.addSvgIcon(
      'ic_edit',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/ic_edit.svg'));
  }
}