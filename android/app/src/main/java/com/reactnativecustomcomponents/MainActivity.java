package com.reactnativecustomcomponents;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    private final BroadcastReceiver reloadReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            reload();
        }
    };

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeCustomComponents";
    }

    private void reload() {
        getReactInstanceManager().getDevSupportManager().handleReloadJS();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (getReactInstanceManager().getDevSupportManager().getDevSupportEnabled()) {
            this.unregisterReceiver(reloadReceiver);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (getReactInstanceManager().getDevSupportManager().getDevSupportEnabled()) {
            this.registerReceiver(reloadReceiver, new IntentFilter("react.native.RELOAD"));
        }
    }
}
