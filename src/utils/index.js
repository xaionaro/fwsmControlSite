
export function checkHttpStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	} else {
		var error = new Error(response.statusText)
		error.response = response
		throw error
	}
}

export function parseJSON(response) {
	return response.json()
}

export function b64MaskToInt(b64Mask) {
	return Buffer.from(b64Mask, 'base64').readUIntBE(12, 4);
}

export function b64MaskToPrefixSize(b64Mask) {
	var maskInt = b64MaskToInt(b64Mask);
	var maskBinStr = maskInt.toString(2);
	return maskBinStr.indexOf('0');
}

