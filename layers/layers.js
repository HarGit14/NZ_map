var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_temp1_1 = new ol.format.GeoJSON();
var features_temp1_1 = format_temp1_1.readFeatures(json_temp1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temp1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temp1_1.addFeatures(features_temp1_1);
var lyr_temp1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temp1_1, 
                style: style_temp1_1,
                popuplayertitle: 'temp1',
                interactive: true,
                title: '<img src="styles/legend/temp1_1.png" /> temp1'
            });
var format_tourism_attraction_2 = new ol.format.GeoJSON();
var features_tourism_attraction_2 = format_tourism_attraction_2.readFeatures(json_tourism_attraction_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_attraction_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_attraction_2.addFeatures(features_tourism_attraction_2);
var lyr_tourism_attraction_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_attraction_2, 
                style: style_tourism_attraction_2,
                popuplayertitle: 'tourism_attraction',
                interactive: true,
                title: '<img src="styles/legend/tourism_attraction_2.png" /> tourism_attraction'
            });
var format_tourism_attraction_3 = new ol.format.GeoJSON();
var features_tourism_attraction_3 = format_tourism_attraction_3.readFeatures(json_tourism_attraction_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_attraction_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_attraction_3.addFeatures(features_tourism_attraction_3);
var lyr_tourism_attraction_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_attraction_3, 
                style: style_tourism_attraction_3,
                popuplayertitle: 'tourism_attraction',
                interactive: true,
                title: '<img src="styles/legend/tourism_attraction_3.png" /> tourism_attraction'
            });
var format_tourism_attraction_4 = new ol.format.GeoJSON();
var features_tourism_attraction_4 = format_tourism_attraction_4.readFeatures(json_tourism_attraction_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_attraction_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_attraction_4.addFeatures(features_tourism_attraction_4);
var lyr_tourism_attraction_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_attraction_4, 
                style: style_tourism_attraction_4,
                popuplayertitle: 'tourism_attraction',
                interactive: true,
                title: '<img src="styles/legend/tourism_attraction_4.png" /> tourism_attraction'
            });
var format_Attr_manual_5 = new ol.format.GeoJSON();
var features_Attr_manual_5 = format_Attr_manual_5.readFeatures(json_Attr_manual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Attr_manual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Attr_manual_5.addFeatures(features_Attr_manual_5);
var lyr_Attr_manual_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Attr_manual_5, 
                style: style_Attr_manual_5,
                popuplayertitle: 'Attr_manual',
                interactive: true,
                title: '<img src="styles/legend/Attr_manual_5.png" /> Attr_manual'
            });
var format_tourism_viewpoint_6 = new ol.format.GeoJSON();
var features_tourism_viewpoint_6 = format_tourism_viewpoint_6.readFeatures(json_tourism_viewpoint_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_viewpoint_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_viewpoint_6.addFeatures(features_tourism_viewpoint_6);
var lyr_tourism_viewpoint_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_viewpoint_6, 
                style: style_tourism_viewpoint_6,
                popuplayertitle: 'tourism_viewpoint',
                interactive: true,
                title: '<img src="styles/legend/tourism_viewpoint_6.png" /> tourism_viewpoint'
            });
var format_tourism_viewpoint_7 = new ol.format.GeoJSON();
var features_tourism_viewpoint_7 = format_tourism_viewpoint_7.readFeatures(json_tourism_viewpoint_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_viewpoint_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_viewpoint_7.addFeatures(features_tourism_viewpoint_7);
var lyr_tourism_viewpoint_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_viewpoint_7, 
                style: style_tourism_viewpoint_7,
                popuplayertitle: 'tourism_viewpoint',
                interactive: true,
                title: '<img src="styles/legend/tourism_viewpoint_7.png" /> tourism_viewpoint'
            });
var format_Verena_Tspots_8 = new ol.format.GeoJSON();
var features_Verena_Tspots_8 = format_Verena_Tspots_8.readFeatures(json_Verena_Tspots_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verena_Tspots_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verena_Tspots_8.addFeatures(features_Verena_Tspots_8);
var lyr_Verena_Tspots_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verena_Tspots_8, 
                style: style_Verena_Tspots_8,
                popuplayertitle: 'Verena_Tspots',
                interactive: true,
                title: '<img src="styles/legend/Verena_Tspots_8.png" /> Verena_Tspots'
            });
var format_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9 = new ol.format.GeoJSON();
var features_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9 = format_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9.readFeatures(json_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9.addFeatures(features_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9);
var lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9, 
                style: style_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9,
                popuplayertitle: 'Neuseeland 2025 — Route von 3 Cyril Kay Road, Auckland Airport, Auckland 2022, Neuseeland nach Tasman Lookout',
                interactive: true,
                title: 'Neuseeland 2025 — Route von 3 Cyril Kay Road, Auckland Airport, Auckland 2022, Neuseeland nach Tasman Lookout'
            });
var format_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10 = format_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10.readFeatures(json_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10.addFeatures(features_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10);
var lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10, 
                style: style_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10,
                popuplayertitle: 'Neuseeland 2025 — Route von Auckland Airport Kiwi Hotel nach Mangōnui, Neuseeland',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Auckland Airport Kiwi Hotel nach Mangōnui, Neuseeland'
            });
var format_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11 = format_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11.readFeatures(json_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11.addFeatures(features_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11);
var lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11, 
                style: style_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11,
                popuplayertitle: 'Neuseeland 2025 — Route von Mangōnui, Neuseeland nach Auckland, Neuseeland',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Mangōnui, Neuseeland nach Auckland, Neuseeland'
            });
var format_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12 = format_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12.readFeatures(json_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12.addFeatures(features_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12);
var lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12, 
                style: style_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12,
                popuplayertitle: 'Neuseeland 2025 — Route von Manurewa, Auckland, Neuseeland nach Napier, Neuseeland',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Manurewa, Auckland, Neuseeland nach Napier, Neuseeland'
            });
var format_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13 = format_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13.readFeatures(json_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13.addFeatures(features_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13);
var lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13, 
                style: style_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13,
                popuplayertitle: 'Neuseeland 2025 — Route von Napier, Neuseeland nach Cape Egmont, Taranaki, Neuseeland',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Napier, Neuseeland nach Cape Egmont, Taranaki, Neuseeland'
            });
var format_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14 = format_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14.readFeatures(json_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14.addFeatures(features_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14);
var lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14, 
                style: style_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14,
                popuplayertitle: 'Neuseeland 2025 — Route von Stratford, Neuseeland nach Auckland Airport Kiwi Hotel',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Stratford, Neuseeland nach Auckland Airport Kiwi Hotel'
            });
var format_Neuseeland2025CapeReinga2_15 = new ol.format.GeoJSON();
var features_Neuseeland2025CapeReinga2_15 = format_Neuseeland2025CapeReinga2_15.readFeatures(json_Neuseeland2025CapeReinga2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025CapeReinga2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025CapeReinga2_15.addFeatures(features_Neuseeland2025CapeReinga2_15);
var lyr_Neuseeland2025CapeReinga2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025CapeReinga2_15, 
                style: style_Neuseeland2025CapeReinga2_15,
                popuplayertitle: 'Neuseeland 2025 — Cape Reinga 2',
                interactive: true,
                title: 'Neuseeland 2025 — Cape Reinga 2'
            });
var format_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16 = new ol.format.GeoJSON();
var features_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16 = format_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16.readFeatures(json_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16.addFeatures(features_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16);
var lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16, 
                style: style_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16,
                popuplayertitle: 'Neuseeland 2025 — Route von 3 Cyril Kay Road, Auckland Airport, Auckland 2022, Neuseeland nach Tasman Lookout',
                interactive: true,
                title: 'Neuseeland 2025 — Route von 3 Cyril Kay Road, Auckland Airport, Auckland 2022, Neuseeland nach Tasman Lookout'
            });
var format_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17 = format_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17.readFeatures(json_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17.addFeatures(features_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17);
var lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17, 
                style: style_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17,
                popuplayertitle: 'Neuseeland 2025 — Route von Auckland Airport Kiwi Hotel nach Mangōnui, Neuseeland',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Auckland Airport Kiwi Hotel nach Mangōnui, Neuseeland'
            });
var format_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18 = format_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18.readFeatures(json_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18.addFeatures(features_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18);
var lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18, 
                style: style_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18,
                popuplayertitle: 'Neuseeland 2025 — Route von Mangōnui, Neuseeland nach Auckland, Neuseeland',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Mangōnui, Neuseeland nach Auckland, Neuseeland'
            });
var format_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19 = format_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19.readFeatures(json_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19.addFeatures(features_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19);
var lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19, 
                style: style_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19,
                popuplayertitle: 'Neuseeland 2025 — Route von Manurewa, Auckland, Neuseeland nach Napier, Neuseeland',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Manurewa, Auckland, Neuseeland nach Napier, Neuseeland'
            });
var format_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20 = format_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20.readFeatures(json_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20.addFeatures(features_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20);
var lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20, 
                style: style_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20,
                popuplayertitle: 'Neuseeland 2025 — Route von Napier, Neuseeland nach Cape Egmont, Taranaki, Neuseeland',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Napier, Neuseeland nach Cape Egmont, Taranaki, Neuseeland'
            });
var format_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21 = new ol.format.GeoJSON();
var features_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21 = format_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21.readFeatures(json_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21.addFeatures(features_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21);
var lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21, 
                style: style_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21,
                popuplayertitle: 'Neuseeland 2025 — Route von Stratford, Neuseeland nach Auckland Airport Kiwi Hotel',
                interactive: true,
                title: 'Neuseeland 2025 — Route von Stratford, Neuseeland nach Auckland Airport Kiwi Hotel'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_temp1_1.setVisible(true);lyr_tourism_attraction_2.setVisible(true);lyr_tourism_attraction_3.setVisible(true);lyr_tourism_attraction_4.setVisible(true);lyr_Attr_manual_5.setVisible(true);lyr_tourism_viewpoint_6.setVisible(true);lyr_tourism_viewpoint_7.setVisible(true);lyr_Verena_Tspots_8.setVisible(true);lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9.setVisible(true);lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10.setVisible(true);lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11.setVisible(true);lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12.setVisible(true);lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13.setVisible(true);lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14.setVisible(true);lyr_Neuseeland2025CapeReinga2_15.setVisible(true);lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16.setVisible(true);lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17.setVisible(true);lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18.setVisible(true);lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19.setVisible(true);lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20.setVisible(true);lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_temp1_1,lyr_tourism_attraction_2,lyr_tourism_attraction_3,lyr_tourism_attraction_4,lyr_Attr_manual_5,lyr_tourism_viewpoint_6,lyr_tourism_viewpoint_7,lyr_Verena_Tspots_8,lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9,lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10,lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11,lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12,lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13,lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14,lyr_Neuseeland2025CapeReinga2_15,lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16,lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17,lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18,lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19,lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20,lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21];
lyr_temp1_1.set('fieldAliases', {'Address': 'Address', 'country': 'country', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_tourism_attraction_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'barrier': 'barrier', 'bridge': 'bridge', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'width': 'width', 'wheelchair': 'wheelchair', 'tunnel': 'tunnel', 'surface': 'surface', 'name_mi': 'name_mi', 'name_en': 'name_en', 'name': 'name', 'lit': 'lit', 'layer': 'layer', 'highway': 'highway', });
lyr_tourism_attraction_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'barrier': 'barrier', 'ele': 'ele', 'contact_ph': 'contact_ph', 'contact_in': 'contact_in', 'ref_linz_h': 'ref_linz_h', 'seamark_ty': 'seamark_ty', 'seamark_na': 'seamark_na', 'genus': 'genus', 'ruins': 'ruins', 'boat_tours': 'boat_tours', 'scuba_divi': 'scuba_divi', 'operator': 'operator', 'not_natura': 'not_natura', 'reservatio': 'reservatio', 'species_wi': 'species_wi', 'species__1': 'species__1', 'leaf_type': 'leaf_type', 'wheelchair': 'wheelchair', 'name_fr': 'name_fr', 'phone_NZ': 'phone_NZ', 'mobile': 'mobile', 'contact_fa': 'contact_fa', 'entrance': 'entrance', 'name_nl': 'name_nl', 'sport': 'sport', 'club': 'club', 'historic_c': 'historic_c', 'archaeolog': 'archaeolog', 'name_de': 'name_de', 'name_ja': 'name_ja', 'email': 'email', 'phone': 'phone', 'addr_hamle': 'addr_hamle', 'name_simpl': 'name_simpl', 'craft': 'craft', 'fee': 'fee', 'access': 'access', 'source_ref': 'source_ref', 'attributio': 'attributio', 'LINZ_sourc': 'LINZ_sourc', 'LINZ_layer': 'LINZ_layer', 'direction': 'direction', 'man_made': 'man_made', 'name_etymo': 'name_etymo', 'alt_name_c': 'alt_name_c', 'alt_name': 'alt_name', 'amenity': 'amenity', 'url': 'url', 'website': 'website', 'ref_linz_a': 'ref_linz_a', 'opening_ho': 'opening_ho', 'addr_subur': 'addr_subur', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'wikipedia': 'wikipedia', 'name_ety_1': 'name_ety_1', 'name_en': 'name_en', 'diameter': 'diameter', 'descriptio': 'descriptio', 'denotation': 'denotation', 'species': 'species', 'name_cs': 'name_cs', 'leaf_cycle': 'leaf_cycle', 'attraction': 'attraction', 'is_in': 'is_in', 'descript_1': 'descript_1', 'ref_nz_her': 'ref_nz_her', 'historic': 'historic', 'wikidata': 'wikidata', 'waterway': 'waterway', 'ref_linz_p': 'ref_linz_p', 'name_mi': 'name_mi', 'intermitte': 'intermitte', 'height': 'height', 'natural': 'natural', 'name': 'name', });
lyr_tourism_attraction_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'addr_hamle': 'addr_hamle', 'constructi': 'constructi', 'seamark_na': 'seamark_na', 'seamark_li': 'seamark_li', 'seamark__1': 'seamark__1', 'seamark__2': 'seamark__2', 'seamark__3': 'seamark__3', 'seamark__4': 'seamark__4', 'seamark__5': 'seamark__5', 'seamark__6': 'seamark__6', 'seamark__7': 'seamark__7', 'seamark_be': 'seamark_be', 'seamark__8': 'seamark__8', 'seamark__9': 'seamark__9', 'seamark_10': 'seamark_10', 'seamark_11': 'seamark_11', 'material': 'material', 'short_name': 'short_name', 'short_na_1': 'short_na_1', 'name_cs': 'name_cs', 'highway': 'highway', 'water': 'water', 'access': 'access', 'seamark_ty': 'seamark_ty', 'ref_linz_h': 'ref_linz_h', 'floating': 'floating', 'source_ref': 'source_ref', 'attributio': 'attributio', 'LINZ_sourc': 'LINZ_sourc', 'LINZ_layer': 'LINZ_layer', 'mobile': 'mobile', 'barrier': 'barrier', 'operator_w': 'operator_w', 'tower_type': 'tower_type', 'name_zh-Ha': 'name_zh-Ha', 'name_zh-_1': 'name_zh-_1', 'name_zh': 'name_zh', 'man_made': 'man_made', 'layer': 'layer', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'alt_name_m': 'alt_name_m', 'architect': 'architect', 'addr_count': 'addr_count', 'descriptio': 'descriptio', 'religion': 'religion', 'ref_nz_her': 'ref_nz_her', 'ref_linz_a': 'ref_linz_a', 'denominati': 'denominati', 'amenity': 'amenity', 'year_of_co': 'year_of_co', 'operator': 'operator', 'opening_ho': 'opening_ho', 'temperatur': 'temperatur', 'url': 'url', 'phone': 'phone', 'leisure': 'leisure', 'email': 'email', 'landuse': 'landuse', 'roof_shape': 'roof_shape', 'roof_heigh': 'roof_heigh', 'height': 'height', 'sport': 'sport', 'name_en': 'name_en', 'building': 'building', 'website': 'website', 'start_date': 'start_date', 'historic': 'historic', 'addr_subur': 'addr_subur', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'surface': 'surface', 'natural': 'natural', 'name_ja': 'name_ja', 'attraction': 'attraction', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'ref_linz_p': 'ref_linz_p', 'place': 'place', 'name_mk': 'name_mk', 'name_mi': 'name_mi', 'name': 'name', 'alt_name': 'alt_name', });
lyr_Attr_manual_5.set('fieldAliases', {'id': 'id', 'name': 'name', 'desc': 'desc', });
lyr_tourism_viewpoint_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'locked': 'locked', 'barrier': 'barrier', 'material': 'material', 'access': 'access', 'name_etymo': 'name_etymo', 'ruins': 'ruins', 'name_cs': 'name_cs', 'alt_name_e': 'alt_name_e', 'alt_name_c': 'alt_name_c', 'alt_name': 'alt_name', 'amenity': 'amenity', 'opening_ho': 'opening_ho', 'name_fr': 'name_fr', 'name_de': 'name_de', 'image': 'image', 'website': 'website', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_zh': 'name_zh', 'historic': 'historic', 'fortificat': 'fortificat', 'archaeolog': 'archaeolog', 'covered': 'covered', 'level': 'level', 'designatio': 'designatio', 'name_mk': 'name_mk', 'name_ja': 'name_ja', 'height': 'height', 'layer': 'layer', 'noexit': 'noexit', 'foot': 'foot', 'direction': 'direction', 'seamark_ty': 'seamark_ty', 'seamark_li': 'seamark_li', 'seamark__1': 'seamark__1', 'seamark__2': 'seamark__2', 'seamark__3': 'seamark__3', 'seamark__4': 'seamark__4', 'ref_linz_h': 'ref_linz_h', 'descriptio': 'descriptio', 'wheelchair': 'wheelchair', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'ref_linz_t': 'ref_linz_t', 'ref_linz_p': 'ref_linz_p', 'natural': 'natural', 'name_mi': 'name_mi', 'name': 'name', 'ele': 'ele', });
lyr_tourism_viewpoint_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'surface': 'surface', 'lit': 'lit', 'bridge': 'bridge', 'tower_type': 'tower_type', 'roof_shape': 'roof_shape', 'roof_level': 'roof_level', 'name': 'name', 'building': 'building', 'wheelchair': 'wheelchair', 'type': 'type', 'roof_colou': 'roof_colou', 'min_height': 'min_height', 'man_made': 'man_made', 'layer': 'layer', 'height': 'height', 'descriptio': 'descriptio', 'building_p': 'building_p', 'building_m': 'building_m', 'building_l': 'building_l', 'building_c': 'building_c', 'balcony': 'balcony', 'access': 'access', });
lyr_Verena_Tspots_8.set('fieldAliases', {'Titel': 'Titel', 'country': 'country', 'Notiz': 'Notiz', 'URL': 'URL', 'Lattitude': 'Lattitude', 'Longitude': 'Longitude', 'Tags': 'Tags', 'Kommentar': 'Kommentar', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025CapeReinga2_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Day': 'Day', 'Type': 'Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Link': 'Link', });
lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_temp1_1.set('fieldImages', {'Address': '', 'country': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_tourism_attraction_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'barrier': 'TextEdit', 'bridge': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'width': 'TextEdit', 'wheelchair': 'TextEdit', 'tunnel': 'TextEdit', 'surface': 'TextEdit', 'name_mi': '', 'name_en': '', 'name': 'TextEdit', 'lit': 'TextEdit', 'layer': 'TextEdit', 'highway': 'TextEdit', });
lyr_tourism_attraction_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'barrier': 'TextEdit', 'ele': 'TextEdit', 'contact_ph': 'TextEdit', 'contact_in': 'TextEdit', 'ref_linz_h': 'TextEdit', 'seamark_ty': 'TextEdit', 'seamark_na': 'TextEdit', 'genus': 'TextEdit', 'ruins': 'TextEdit', 'boat_tours': 'TextEdit', 'scuba_divi': 'TextEdit', 'operator': 'TextEdit', 'not_natura': 'TextEdit', 'reservatio': 'TextEdit', 'species_wi': 'TextEdit', 'species__1': 'TextEdit', 'leaf_type': 'TextEdit', 'wheelchair': 'TextEdit', 'name_fr': 'TextEdit', 'phone_NZ': 'TextEdit', 'mobile': 'TextEdit', 'contact_fa': 'TextEdit', 'entrance': 'TextEdit', 'name_nl': 'TextEdit', 'sport': 'TextEdit', 'club': 'TextEdit', 'historic_c': 'TextEdit', 'archaeolog': 'TextEdit', 'name_de': 'TextEdit', 'name_ja': 'TextEdit', 'email': 'TextEdit', 'phone': 'TextEdit', 'addr_hamle': 'TextEdit', 'name_simpl': 'TextEdit', 'craft': 'TextEdit', 'fee': 'TextEdit', 'access': 'TextEdit', 'source_ref': 'TextEdit', 'attributio': 'TextEdit', 'LINZ_sourc': 'TextEdit', 'LINZ_layer': 'TextEdit', 'direction': 'TextEdit', 'man_made': 'TextEdit', 'name_etymo': 'TextEdit', 'alt_name_c': 'TextEdit', 'alt_name': 'TextEdit', 'amenity': 'TextEdit', 'url': 'TextEdit', 'website': 'TextEdit', 'ref_linz_a': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_subur': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'wikipedia': 'TextEdit', 'name_ety_1': 'TextEdit', 'name_en': 'TextEdit', 'diameter': 'TextEdit', 'descriptio': 'TextEdit', 'denotation': 'TextEdit', 'species': 'TextEdit', 'name_cs': 'TextEdit', 'leaf_cycle': 'TextEdit', 'attraction': 'TextEdit', 'is_in': 'TextEdit', 'descript_1': 'TextEdit', 'ref_nz_her': 'TextEdit', 'historic': 'TextEdit', 'wikidata': 'TextEdit', 'waterway': 'TextEdit', 'ref_linz_p': 'TextEdit', 'name_mi': 'TextEdit', 'intermitte': 'TextEdit', 'height': 'TextEdit', 'natural': 'TextEdit', 'name': 'TextEdit', });
lyr_tourism_attraction_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'addr_hamle': '', 'constructi': '', 'seamark_na': '', 'seamark_li': '', 'seamark__1': '', 'seamark__2': '', 'seamark__3': '', 'seamark__4': '', 'seamark__5': '', 'seamark__6': '', 'seamark__7': '', 'seamark_be': '', 'seamark__8': '', 'seamark__9': '', 'seamark_10': '', 'seamark_11': '', 'material': '', 'short_name': '', 'short_na_1': '', 'name_cs': '', 'highway': '', 'water': '', 'access': '', 'seamark_ty': '', 'ref_linz_h': '', 'floating': '', 'source_ref': '', 'attributio': '', 'LINZ_sourc': '', 'LINZ_layer': '', 'mobile': '', 'barrier': '', 'operator_w': '', 'tower_type': '', 'name_zh-Ha': '', 'name_zh-_1': '', 'name_zh': '', 'man_made': '', 'layer': '', 'contact_in': '', 'contact_fa': '', 'alt_name_m': '', 'architect': '', 'addr_count': '', 'descriptio': '', 'religion': '', 'ref_nz_her': '', 'ref_linz_a': '', 'denominati': '', 'amenity': '', 'year_of_co': '', 'operator': '', 'opening_ho': '', 'temperatur': '', 'url': '', 'phone': '', 'leisure': '', 'email': '', 'landuse': '', 'roof_shape': '', 'roof_heigh': '', 'height': '', 'sport': '', 'name_en': '', 'building': '', 'website': '', 'start_date': '', 'historic': '', 'addr_subur': '', 'addr_stree': '', 'addr_postc': '', 'addr_house': '', 'addr_city': '', 'surface': '', 'natural': '', 'name_ja': '', 'attraction': '', 'wikipedia': '', 'wikidata': '', 'type': '', 'ref_linz_p': '', 'place': '', 'name_mk': '', 'name_mi': '', 'name': '', 'alt_name': '', });
lyr_Attr_manual_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', });
lyr_tourism_viewpoint_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'locked': 'TextEdit', 'barrier': 'TextEdit', 'material': 'TextEdit', 'access': 'TextEdit', 'name_etymo': 'TextEdit', 'ruins': 'TextEdit', 'name_cs': 'TextEdit', 'alt_name_e': 'TextEdit', 'alt_name_c': 'TextEdit', 'alt_name': 'TextEdit', 'amenity': 'TextEdit', 'opening_ho': 'TextEdit', 'name_fr': 'TextEdit', 'name_de': 'TextEdit', 'image': 'TextEdit', 'website': 'TextEdit', 'name_en': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_zh': 'TextEdit', 'historic': 'TextEdit', 'fortificat': 'TextEdit', 'archaeolog': 'TextEdit', 'covered': 'TextEdit', 'level': 'TextEdit', 'designatio': 'TextEdit', 'name_mk': 'TextEdit', 'name_ja': 'TextEdit', 'height': 'TextEdit', 'layer': 'TextEdit', 'noexit': 'TextEdit', 'foot': 'TextEdit', 'direction': 'TextEdit', 'seamark_ty': 'TextEdit', 'seamark_li': 'TextEdit', 'seamark__1': 'TextEdit', 'seamark__2': 'TextEdit', 'seamark__3': 'TextEdit', 'seamark__4': 'TextEdit', 'ref_linz_h': 'TextEdit', 'descriptio': 'TextEdit', 'wheelchair': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'ref_linz_t': 'TextEdit', 'ref_linz_p': 'TextEdit', 'natural': 'TextEdit', 'name_mi': 'TextEdit', 'name': 'TextEdit', 'ele': 'TextEdit', });
lyr_tourism_viewpoint_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'surface': '', 'lit': '', 'bridge': '', 'tower_type': '', 'roof_shape': '', 'roof_level': '', 'name': '', 'building': '', 'wheelchair': '', 'type': '', 'roof_colou': '', 'min_height': '', 'man_made': '', 'layer': '', 'height': '', 'descriptio': '', 'building_p': '', 'building_m': '', 'building_l': '', 'building_c': '', 'balcony': '', 'access': '', });
lyr_Verena_Tspots_8.set('fieldImages', {'Titel': 'TextEdit', 'country': 'TextEdit', 'Notiz': 'TextEdit', 'URL': 'TextEdit', 'Lattitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tags': 'TextEdit', 'Kommentar': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025CapeReinga2_15.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Day': '', 'Type': '', 'Address': '', 'Latitude': '', 'Longitude': '', 'Link': '', });
lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_temp1_1.set('fieldLabels', {'Address': 'no label', 'country': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_tourism_attraction_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'barrier': 'no label', 'bridge': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'width': 'no label', 'wheelchair': 'no label', 'tunnel': 'no label', 'surface': 'no label', 'name_mi': 'no label', 'name_en': 'no label', 'name': 'no label', 'lit': 'no label', 'layer': 'no label', 'highway': 'no label', });
lyr_tourism_attraction_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'barrier': 'no label', 'ele': 'no label', 'contact_ph': 'no label', 'contact_in': 'no label', 'ref_linz_h': 'no label', 'seamark_ty': 'no label', 'seamark_na': 'no label', 'genus': 'no label', 'ruins': 'no label', 'boat_tours': 'no label', 'scuba_divi': 'no label', 'operator': 'no label', 'not_natura': 'no label', 'reservatio': 'no label', 'species_wi': 'no label', 'species__1': 'no label', 'leaf_type': 'no label', 'wheelchair': 'no label', 'name_fr': 'no label', 'phone_NZ': 'no label', 'mobile': 'no label', 'contact_fa': 'no label', 'entrance': 'no label', 'name_nl': 'no label', 'sport': 'no label', 'club': 'no label', 'historic_c': 'no label', 'archaeolog': 'no label', 'name_de': 'no label', 'name_ja': 'no label', 'email': 'no label', 'phone': 'no label', 'addr_hamle': 'no label', 'name_simpl': 'no label', 'craft': 'no label', 'fee': 'no label', 'access': 'no label', 'source_ref': 'no label', 'attributio': 'no label', 'LINZ_sourc': 'no label', 'LINZ_layer': 'no label', 'direction': 'no label', 'man_made': 'no label', 'name_etymo': 'no label', 'alt_name_c': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'url': 'no label', 'website': 'no label', 'ref_linz_a': 'no label', 'opening_ho': 'no label', 'addr_subur': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'wikipedia': 'no label', 'name_ety_1': 'no label', 'name_en': 'no label', 'diameter': 'no label', 'descriptio': 'no label', 'denotation': 'no label', 'species': 'no label', 'name_cs': 'no label', 'leaf_cycle': 'no label', 'attraction': 'no label', 'is_in': 'no label', 'descript_1': 'no label', 'ref_nz_her': 'no label', 'historic': 'no label', 'wikidata': 'no label', 'waterway': 'no label', 'ref_linz_p': 'no label', 'name_mi': 'no label', 'intermitte': 'no label', 'height': 'no label', 'natural': 'no label', 'name': 'no label', });
lyr_tourism_attraction_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'addr_hamle': 'no label', 'constructi': 'no label', 'seamark_na': 'no label', 'seamark_li': 'no label', 'seamark__1': 'no label', 'seamark__2': 'no label', 'seamark__3': 'no label', 'seamark__4': 'no label', 'seamark__5': 'no label', 'seamark__6': 'no label', 'seamark__7': 'no label', 'seamark_be': 'no label', 'seamark__8': 'no label', 'seamark__9': 'no label', 'seamark_10': 'no label', 'seamark_11': 'no label', 'material': 'no label', 'short_name': 'no label', 'short_na_1': 'no label', 'name_cs': 'no label', 'highway': 'no label', 'water': 'no label', 'access': 'no label', 'seamark_ty': 'no label', 'ref_linz_h': 'no label', 'floating': 'no label', 'source_ref': 'no label', 'attributio': 'no label', 'LINZ_sourc': 'no label', 'LINZ_layer': 'no label', 'mobile': 'no label', 'barrier': 'no label', 'operator_w': 'no label', 'tower_type': 'no label', 'name_zh-Ha': 'no label', 'name_zh-_1': 'no label', 'name_zh': 'no label', 'man_made': 'no label', 'layer': 'no label', 'contact_in': 'no label', 'contact_fa': 'no label', 'alt_name_m': 'no label', 'architect': 'no label', 'addr_count': 'no label', 'descriptio': 'no label', 'religion': 'no label', 'ref_nz_her': 'no label', 'ref_linz_a': 'no label', 'denominati': 'no label', 'amenity': 'no label', 'year_of_co': 'no label', 'operator': 'no label', 'opening_ho': 'no label', 'temperatur': 'no label', 'url': 'no label', 'phone': 'no label', 'leisure': 'no label', 'email': 'no label', 'landuse': 'no label', 'roof_shape': 'no label', 'roof_heigh': 'no label', 'height': 'no label', 'sport': 'no label', 'name_en': 'no label', 'building': 'no label', 'website': 'no label', 'start_date': 'no label', 'historic': 'no label', 'addr_subur': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'surface': 'no label', 'natural': 'no label', 'name_ja': 'no label', 'attraction': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'ref_linz_p': 'no label', 'place': 'no label', 'name_mk': 'no label', 'name_mi': 'no label', 'name': 'no label', 'alt_name': 'no label', });
lyr_Attr_manual_5.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'desc': 'no label', });
lyr_tourism_viewpoint_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'locked': 'no label', 'barrier': 'no label', 'material': 'no label', 'access': 'no label', 'name_etymo': 'no label', 'ruins': 'no label', 'name_cs': 'no label', 'alt_name_e': 'no label', 'alt_name_c': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'opening_ho': 'no label', 'name_fr': 'no label', 'name_de': 'no label', 'image': 'no label', 'website': 'no label', 'name_en': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'name_zh': 'no label', 'historic': 'no label', 'fortificat': 'no label', 'archaeolog': 'no label', 'covered': 'no label', 'level': 'no label', 'designatio': 'no label', 'name_mk': 'no label', 'name_ja': 'no label', 'height': 'no label', 'layer': 'no label', 'noexit': 'no label', 'foot': 'no label', 'direction': 'no label', 'seamark_ty': 'no label', 'seamark_li': 'no label', 'seamark__1': 'no label', 'seamark__2': 'no label', 'seamark__3': 'no label', 'seamark__4': 'no label', 'ref_linz_h': 'no label', 'descriptio': 'no label', 'wheelchair': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'ref_linz_t': 'no label', 'ref_linz_p': 'no label', 'natural': 'no label', 'name_mi': 'no label', 'name': 'no label', 'ele': 'no label', });
lyr_tourism_viewpoint_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'surface': 'no label', 'lit': 'no label', 'bridge': 'no label', 'tower_type': 'no label', 'roof_shape': 'no label', 'roof_level': 'no label', 'name': 'no label', 'building': 'no label', 'wheelchair': 'no label', 'type': 'no label', 'roof_colou': 'no label', 'min_height': 'no label', 'man_made': 'no label', 'layer': 'no label', 'height': 'no label', 'descriptio': 'no label', 'building_p': 'no label', 'building_m': 'no label', 'building_l': 'no label', 'building_c': 'no label', 'balcony': 'no label', 'access': 'no label', });
lyr_Verena_Tspots_8.set('fieldLabels', {'Titel': 'no label', 'country': 'no label', 'Notiz': 'no label', 'URL': 'no label', 'Lattitude': 'no label', 'Longitude': 'no label', 'Tags': 'no label', 'Kommentar': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025CapeReinga2_15.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Day': 'no label', 'Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Link': 'no label', });
lyr_Neuseeland2025Routevon3CyrilKayRoadAucklandAirportAuckland2022NeuseelandnachTasmanLookout_16.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonAucklandAirportKiwiHotelnachMangnuiNeuseeland_17.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonMangnuiNeuseelandnachAucklandNeuseeland_18.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonManurewaAucklandNeuseelandnachNapierNeuseeland_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonNapierNeuseelandnachCapeEgmontTaranakiNeuseeland_20.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Neuseeland2025RoutevonStratfordNeuseelandnachAucklandAirportKiwiHotel_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});