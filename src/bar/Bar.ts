import * as _ from 'lodash';

export default class Bar
{
    public static world(): string
    {
        return _.upperCase('world');
    }
    
    public static nonCovered(): string
    {
        return 'foo';
    }
}
