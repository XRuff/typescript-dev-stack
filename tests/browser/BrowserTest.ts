import {suite, test} from 'mocha-typescript';
import {assert} from 'chai';
import sinon from 'sinon';
import Bar from 'bar/Bar';

@suite
class BrowserTest
{
    @test
    'bar is available'()
    {
        assert.strictEqual('WORLD', Bar.world());
    }

    @test
    'sinon is available'()
    {
        assert.ok(sinon.spy);
    }

    @test
    'test runs in browser context'()
    {
        assert.ok(document.createElement);
    }
}