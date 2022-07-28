import * as crypto from 'crypto';

/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 */
export function hashCode(str): string {

    const hash = crypto.createHash('SHA256');
    hash.update(str).end();
    return hash.digest('hex');
}