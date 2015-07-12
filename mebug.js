/*
 Copyright (c) 2014-2015, Mustafa OZGUR <root@mustafaozgur.com>

 Permission to use, copy, modify, and/or distribute this software for any
 purpose with or without fee is hereby granted, provided that the above
 copyright notice and this permission notice appear in all copies.

 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
function mebug(prefix)
{
	this.with_source_link = true;
	this.prefix           = prefix ? prefix : '';

	this.console_colors = {
		'success': 'background: darkgreen; color: white;',
		'error'  : 'background: #a44; color: white;',
		'info'   : 'background: royalblue; color: white;',
		'warn'   : 'background: #222; color: #ff4;',
		'debug'  : 'background: #222; color: #fff;'
	};

	this.success = function (msg)
	{
		var console_message = '%c' + (this.prefix ? this.prefix + ' ' : ''), others = null;

		if (arguments.length > 1)
		{
			console_message += msg;
			others = Array.prototype.slice.call(arguments, 1);
		}
		else
		{
			var arguments_calle_name = arguments.callee.caller.toString().match(/mebug\([^;]*?\)\.(success|error|info|warn|debug)\(([^;]*)\)/);
			// arguments_calle_name[1] + ' ' +
			console_message += arguments_calle_name[2];
			if (arguments_calle_name[2][0] != '\'' && arguments_calle_name[2][0] == '"')
			{
				others = arguments;
			}
		}

		this._log('success', console_message, others);
	};

	this.error = function (msg)
	{
		var console_message = '%c' + (this.prefix ? this.prefix + ' ' : ''), others = null;

		if (arguments.length > 1)
		{
			console_message += msg;
			others = Array.prototype.slice.call(arguments, 1);
		}
		else
		{
			var arguments_calle_name = arguments.callee.caller.toString().match(/mebug\([^;]*?\)\.(success|error|info|warn|debug)\(([^;]*)\)/);
			// arguments_calle_name[1] + ' ' +
			console_message += arguments_calle_name[2];
			if (arguments_calle_name[2][0] != '\'' && arguments_calle_name[2][0] == '"')
			{
				others = arguments;
			}
		}

		this._log('error', console_message, others);
	};

	this.info = function (msg)
	{
		var console_message = '%c' + (this.prefix ? this.prefix + ' ' : ''), others = null;

		if (arguments.length > 1)
		{
			console_message += msg;
			others = Array.prototype.slice.call(arguments, 1);
		}
		else
		{
			var arguments_calle_name = arguments.callee.caller.toString().match(/mebug\([^;]*?\)\.(success|error|info|warn|debug)\(([^;]*)\)/);
			// arguments_calle_name[1] + ' ' +
			console_message += arguments_calle_name[2];
			if (arguments_calle_name[2][0] != '\'' && arguments_calle_name[2][0] == '"')
			{
				others = arguments;
			}
		}

		this._log('info', console_message, others);
	};

	this.warn = function (msg)
	{
		var console_message = '%c' + (this.prefix ? this.prefix + ' ' : ''), others = null;

		if (arguments.length > 1)
		{
			console_message += msg;
			others = Array.prototype.slice.call(arguments, 1);
		}
		else
		{
			var arguments_calle_name = arguments.callee.caller.toString().match(/mebug\([^;]*?\)\.(success|error|info|warn|debug)\(([^;]*)\)/);
			// arguments_calle_name[1] + ' ' +
			console_message += arguments_calle_name[2];
			if (arguments_calle_name[2][0] != '\'' && arguments_calle_name[2][0] == '"')
			{
				others = arguments;
			}
		}

		this._log('warn', console_message, others);
	};

	this.debug = function (msg)
	{
		var console_message = '%c' + (this.prefix ? this.prefix + ' ' : ''), others = null;

		if (arguments.length > 1)
		{
			console_message += msg;
			others = Array.prototype.slice.call(arguments, 1);
		}
		else
		{
			var arguments_calle_name = arguments.callee.caller.toString().match(/mebug\([^;]*?\)\.(success|error|info|warn|debug)\(([^;]*)\)/);
			// arguments_calle_name[1] + ' ' +
			console_message += arguments_calle_name[2];
			if (arguments_calle_name[2][0] != '\'' && arguments_calle_name[2][0] == '"')
			{
				others = arguments;
			}
		}

		this._log('debug', console_message, others);
	};

	this.log = function (style, console_message, others)
	{
		console.log(style, console_message, others);
	};

	this._log = function (style, console_message, others)
	{
		var log_func = style == 'success' ? 'debug' : style, script_link;

		if (this.with_source_link)
		{
			script_link = Error().stack.split("\n")[4].trim();
		}

		style = this.console_colors[style] + '; padding: 2px 4px;';

		if (others)
		{
			console.groupCollapsed(console_message, style, script_link);
			console[log_func](others);
			console.groupEnd();
		}
		else
		{
			console[log_func](console_message, style, script_link);
		}
	};

	return this;
}