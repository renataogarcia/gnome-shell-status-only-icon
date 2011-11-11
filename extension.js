/*
 * Copyright (C) 2011 Guillaume Kulakowski and contributors
 *
 * GNU General Public License v2.0
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */
const St = imports.gi.St;
const Main = imports.ui.main;
const Shell = imports.gi.Shell;
const StatusMenu = imports.ui.statusMenu; 

function main() {
    let statusMenu = Main.panel._statusmenu._name.destroy();
}
