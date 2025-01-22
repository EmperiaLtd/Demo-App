// SDK Interfaces
export type Emperia = {
  events: EventTarget;
  krpano: any;
  experience: {
    krpano: any;
    panorama: any;
  };
  init: (initOptions: initOptions) => void;
};

type initOptions = {
  id: string;
  experience_url: string;
  ui_url: string;
  attach_ui: boolean;
  organization_id: string;
  debug: boolean;
};
