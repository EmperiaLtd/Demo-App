# Demo App

## Embedding Examples

All of the `react embedding examples are under pages/` and the ones `done for plain apps are under standalone-app/`

## Building Custom UI

The example for building and making `Custom-UI work with sdk is in App.tsx`

## Sending event to sdk

```
window.emperia.events.dispatchEvent(
   new CustomEvent('fromUserInterface', { detail: { name: 'changeLocale', data: 'fr' } }),);
```
