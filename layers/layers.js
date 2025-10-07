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
var format_tourism_viewpoint_4 = new ol.format.GeoJSON();
var features_tourism_viewpoint_4 = format_tourism_viewpoint_4.readFeatures(json_tourism_viewpoint_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_viewpoint_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_viewpoint_4.addFeatures(features_tourism_viewpoint_4);
var lyr_tourism_viewpoint_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_viewpoint_4, 
                style: style_tourism_viewpoint_4,
                popuplayertitle: 'tourism_viewpoint',
                interactive: true,
                title: '<img src="styles/legend/tourism_viewpoint_4.png" /> tourism_viewpoint'
            });
var format_Verena_Tspots_5 = new ol.format.GeoJSON();
var features_Verena_Tspots_5 = format_Verena_Tspots_5.readFeatures(json_Verena_Tspots_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verena_Tspots_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verena_Tspots_5.addFeatures(features_Verena_Tspots_5);
var lyr_Verena_Tspots_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verena_Tspots_5, 
                style: style_Verena_Tspots_5,
                popuplayertitle: 'Verena_Tspots',
                interactive: true,
                title: '<img src="styles/legend/Verena_Tspots_5.png" /> Verena_Tspots'
            });
var format_NorthlandRundreise_6 = new ol.format.GeoJSON();
var features_NorthlandRundreise_6 = format_NorthlandRundreise_6.readFeatures(json_NorthlandRundreise_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthlandRundreise_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthlandRundreise_6.addFeatures(features_NorthlandRundreise_6);
var lyr_NorthlandRundreise_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthlandRundreise_6, 
                style: style_NorthlandRundreise_6,
                popuplayertitle: 'Northland Rundreise',
                interactive: true,
                title: '<img src="styles/legend/NorthlandRundreise_6.png" /> Northland Rundreise'
            });
var format_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7 = new ol.format.GeoJSON();
var features_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7 = format_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7.readFeatures(json_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7.addFeatures(features_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7);
var lyr_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7, 
                style: style_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7,
                popuplayertitle: 'Coromandel-Napier — neuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland',
                interactive: true,
                title: '<img src="styles/legend/CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7.png" /> Coromandel-Napier — neuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland'
            });
var format_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8 = new ol.format.GeoJSON();
var features_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8 = format_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8.readFeatures(json_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8.addFeatures(features_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8);
var lyr_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8, 
                style: style_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8,
                popuplayertitle: 'Napier-MtEgmont — neuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland',
                interactive: true,
                title: '<img src="styles/legend/NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8.png" /> Napier-MtEgmont — neuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland'
            });
var format_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9 = new ol.format.GeoJSON();
var features_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9 = format_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9.readFeatures(json_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9.addFeatures(features_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9);
var lyr_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9, 
                style: style_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9,
                popuplayertitle: 'Stratford-Auckland — neuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel',
                interactive: true,
                title: '<img src="styles/legend/StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9.png" /> Stratford-Auckland — neuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel'
            });
var group_nichtgebraucht = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'nicht gebraucht'});

lyr_OpenStreetMap_0.setVisible(true);lyr_temp1_1.setVisible(true);lyr_tourism_attraction_2.setVisible(true);lyr_tourism_attraction_3.setVisible(true);lyr_tourism_viewpoint_4.setVisible(true);lyr_Verena_Tspots_5.setVisible(true);lyr_NorthlandRundreise_6.setVisible(true);lyr_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7.setVisible(true);lyr_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8.setVisible(true);lyr_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_temp1_1,lyr_tourism_attraction_2,lyr_tourism_attraction_3,lyr_tourism_viewpoint_4,lyr_Verena_Tspots_5,lyr_NorthlandRundreise_6,lyr_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7,lyr_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8,lyr_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9];
lyr_temp1_1.set('fieldAliases', {'Address': 'Address', 'country': 'country', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_tourism_attraction_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'barrier': 'barrier', 'bridge': 'bridge', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'width': 'width', 'wheelchair': 'wheelchair', 'tunnel': 'tunnel', 'surface': 'surface', 'name_mi': 'name_mi', 'name_en': 'name_en', 'name': 'name', 'lit': 'lit', 'layer': 'layer', 'highway': 'highway', });
lyr_tourism_attraction_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'barrier': 'barrier', 'ele': 'ele', 'contact_ph': 'contact_ph', 'contact_in': 'contact_in', 'ref_linz_h': 'ref_linz_h', 'seamark_ty': 'seamark_ty', 'seamark_na': 'seamark_na', 'genus': 'genus', 'ruins': 'ruins', 'boat_tours': 'boat_tours', 'scuba_divi': 'scuba_divi', 'operator': 'operator', 'not_natura': 'not_natura', 'reservatio': 'reservatio', 'species_wi': 'species_wi', 'species__1': 'species__1', 'leaf_type': 'leaf_type', 'wheelchair': 'wheelchair', 'name_fr': 'name_fr', 'phone_NZ': 'phone_NZ', 'mobile': 'mobile', 'contact_fa': 'contact_fa', 'entrance': 'entrance', 'name_nl': 'name_nl', 'sport': 'sport', 'club': 'club', 'historic_c': 'historic_c', 'archaeolog': 'archaeolog', 'name_de': 'name_de', 'name_ja': 'name_ja', 'email': 'email', 'phone': 'phone', 'addr_hamle': 'addr_hamle', 'name_simpl': 'name_simpl', 'craft': 'craft', 'fee': 'fee', 'access': 'access', 'source_ref': 'source_ref', 'attributio': 'attributio', 'LINZ_sourc': 'LINZ_sourc', 'LINZ_layer': 'LINZ_layer', 'direction': 'direction', 'man_made': 'man_made', 'name_etymo': 'name_etymo', 'alt_name_c': 'alt_name_c', 'alt_name': 'alt_name', 'amenity': 'amenity', 'url': 'url', 'website': 'website', 'ref_linz_a': 'ref_linz_a', 'opening_ho': 'opening_ho', 'addr_subur': 'addr_subur', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'wikipedia': 'wikipedia', 'name_ety_1': 'name_ety_1', 'name_en': 'name_en', 'diameter': 'diameter', 'descriptio': 'descriptio', 'denotation': 'denotation', 'species': 'species', 'name_cs': 'name_cs', 'leaf_cycle': 'leaf_cycle', 'attraction': 'attraction', 'is_in': 'is_in', 'descript_1': 'descript_1', 'ref_nz_her': 'ref_nz_her', 'historic': 'historic', 'wikidata': 'wikidata', 'waterway': 'waterway', 'ref_linz_p': 'ref_linz_p', 'name_mi': 'name_mi', 'intermitte': 'intermitte', 'height': 'height', 'natural': 'natural', 'name': 'name', });
lyr_tourism_viewpoint_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'locked': 'locked', 'barrier': 'barrier', 'material': 'material', 'access': 'access', 'name_etymo': 'name_etymo', 'ruins': 'ruins', 'name_cs': 'name_cs', 'alt_name_e': 'alt_name_e', 'alt_name_c': 'alt_name_c', 'alt_name': 'alt_name', 'amenity': 'amenity', 'opening_ho': 'opening_ho', 'name_fr': 'name_fr', 'name_de': 'name_de', 'image': 'image', 'website': 'website', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_zh': 'name_zh', 'historic': 'historic', 'fortificat': 'fortificat', 'archaeolog': 'archaeolog', 'covered': 'covered', 'level': 'level', 'designatio': 'designatio', 'name_mk': 'name_mk', 'name_ja': 'name_ja', 'height': 'height', 'layer': 'layer', 'noexit': 'noexit', 'foot': 'foot', 'direction': 'direction', 'seamark_ty': 'seamark_ty', 'seamark_li': 'seamark_li', 'seamark__1': 'seamark__1', 'seamark__2': 'seamark__2', 'seamark__3': 'seamark__3', 'seamark__4': 'seamark__4', 'ref_linz_h': 'ref_linz_h', 'descriptio': 'descriptio', 'wheelchair': 'wheelchair', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'ref_linz_t': 'ref_linz_t', 'ref_linz_p': 'ref_linz_p', 'natural': 'natural', 'name_mi': 'name_mi', 'name': 'name', 'ele': 'ele', });
lyr_Verena_Tspots_5.set('fieldAliases', {'Titel': 'Titel', 'country': 'country', 'Notiz': 'Notiz', 'URL': 'URL', 'Lattitude': 'Lattitude', 'Longitude': 'Longitude', 'Tags': 'Tags', 'Kommentar': 'Kommentar', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_NorthlandRundreise_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid_2': 'fid_2', 'id_2': 'id_2', 'Name_2': 'Name_2', 'description_2': 'description_2', 'timestamp_2': 'timestamp_2', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', });
lyr_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_temp1_1.set('fieldImages', {'Address': '', 'country': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_tourism_attraction_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'barrier': 'TextEdit', 'bridge': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'width': 'TextEdit', 'wheelchair': 'TextEdit', 'tunnel': 'TextEdit', 'surface': 'TextEdit', 'name_mi': '', 'name_en': '', 'name': 'TextEdit', 'lit': 'TextEdit', 'layer': 'TextEdit', 'highway': 'TextEdit', });
lyr_tourism_attraction_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'barrier': 'TextEdit', 'ele': 'TextEdit', 'contact_ph': 'TextEdit', 'contact_in': 'TextEdit', 'ref_linz_h': 'TextEdit', 'seamark_ty': 'TextEdit', 'seamark_na': 'TextEdit', 'genus': 'TextEdit', 'ruins': 'TextEdit', 'boat_tours': 'TextEdit', 'scuba_divi': 'TextEdit', 'operator': 'TextEdit', 'not_natura': 'TextEdit', 'reservatio': 'TextEdit', 'species_wi': 'TextEdit', 'species__1': 'TextEdit', 'leaf_type': 'TextEdit', 'wheelchair': 'TextEdit', 'name_fr': 'TextEdit', 'phone_NZ': 'TextEdit', 'mobile': 'TextEdit', 'contact_fa': 'TextEdit', 'entrance': 'TextEdit', 'name_nl': 'TextEdit', 'sport': 'TextEdit', 'club': 'TextEdit', 'historic_c': 'TextEdit', 'archaeolog': 'TextEdit', 'name_de': 'TextEdit', 'name_ja': 'TextEdit', 'email': 'TextEdit', 'phone': 'TextEdit', 'addr_hamle': 'TextEdit', 'name_simpl': 'TextEdit', 'craft': 'TextEdit', 'fee': 'TextEdit', 'access': 'TextEdit', 'source_ref': 'TextEdit', 'attributio': 'TextEdit', 'LINZ_sourc': 'TextEdit', 'LINZ_layer': 'TextEdit', 'direction': 'TextEdit', 'man_made': 'TextEdit', 'name_etymo': 'TextEdit', 'alt_name_c': 'TextEdit', 'alt_name': 'TextEdit', 'amenity': 'TextEdit', 'url': 'TextEdit', 'website': 'TextEdit', 'ref_linz_a': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_subur': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'wikipedia': 'TextEdit', 'name_ety_1': 'TextEdit', 'name_en': 'TextEdit', 'diameter': 'TextEdit', 'descriptio': 'TextEdit', 'denotation': 'TextEdit', 'species': 'TextEdit', 'name_cs': 'TextEdit', 'leaf_cycle': 'TextEdit', 'attraction': 'TextEdit', 'is_in': 'TextEdit', 'descript_1': 'TextEdit', 'ref_nz_her': 'TextEdit', 'historic': 'TextEdit', 'wikidata': 'TextEdit', 'waterway': 'TextEdit', 'ref_linz_p': 'TextEdit', 'name_mi': 'TextEdit', 'intermitte': 'TextEdit', 'height': 'TextEdit', 'natural': 'TextEdit', 'name': 'TextEdit', });
lyr_tourism_viewpoint_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'locked': 'TextEdit', 'barrier': 'TextEdit', 'material': 'TextEdit', 'access': 'TextEdit', 'name_etymo': 'TextEdit', 'ruins': 'TextEdit', 'name_cs': 'TextEdit', 'alt_name_e': 'TextEdit', 'alt_name_c': 'TextEdit', 'alt_name': 'TextEdit', 'amenity': 'TextEdit', 'opening_ho': 'TextEdit', 'name_fr': 'TextEdit', 'name_de': 'TextEdit', 'image': 'TextEdit', 'website': 'TextEdit', 'name_en': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_zh': 'TextEdit', 'historic': 'TextEdit', 'fortificat': 'TextEdit', 'archaeolog': 'TextEdit', 'covered': 'TextEdit', 'level': 'TextEdit', 'designatio': 'TextEdit', 'name_mk': 'TextEdit', 'name_ja': 'TextEdit', 'height': 'TextEdit', 'layer': 'TextEdit', 'noexit': 'TextEdit', 'foot': 'TextEdit', 'direction': 'TextEdit', 'seamark_ty': 'TextEdit', 'seamark_li': 'TextEdit', 'seamark__1': 'TextEdit', 'seamark__2': 'TextEdit', 'seamark__3': 'TextEdit', 'seamark__4': 'TextEdit', 'ref_linz_h': 'TextEdit', 'descriptio': 'TextEdit', 'wheelchair': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'ref_linz_t': 'TextEdit', 'ref_linz_p': 'TextEdit', 'natural': 'TextEdit', 'name_mi': 'TextEdit', 'name': 'TextEdit', 'ele': 'TextEdit', });
lyr_Verena_Tspots_5.set('fieldImages', {'Titel': 'TextEdit', 'country': 'TextEdit', 'Notiz': 'TextEdit', 'URL': 'TextEdit', 'Lattitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tags': 'TextEdit', 'Kommentar': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_NorthlandRundreise_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid_2': 'TextEdit', 'id_2': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'timestamp_2': 'DateTime', 'begin_2': 'DateTime', 'end_2': 'DateTime', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', });
lyr_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_temp1_1.set('fieldLabels', {'Address': 'no label', 'country': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_tourism_attraction_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'barrier': 'no label', 'bridge': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'width': 'no label', 'wheelchair': 'no label', 'tunnel': 'no label', 'surface': 'no label', 'name_mi': 'no label', 'name_en': 'no label', 'name': 'no label', 'lit': 'no label', 'layer': 'no label', 'highway': 'no label', });
lyr_tourism_attraction_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'barrier': 'no label', 'ele': 'no label', 'contact_ph': 'no label', 'contact_in': 'no label', 'ref_linz_h': 'no label', 'seamark_ty': 'no label', 'seamark_na': 'no label', 'genus': 'no label', 'ruins': 'no label', 'boat_tours': 'no label', 'scuba_divi': 'no label', 'operator': 'no label', 'not_natura': 'no label', 'reservatio': 'no label', 'species_wi': 'no label', 'species__1': 'no label', 'leaf_type': 'no label', 'wheelchair': 'no label', 'name_fr': 'no label', 'phone_NZ': 'no label', 'mobile': 'no label', 'contact_fa': 'no label', 'entrance': 'no label', 'name_nl': 'no label', 'sport': 'no label', 'club': 'no label', 'historic_c': 'no label', 'archaeolog': 'no label', 'name_de': 'no label', 'name_ja': 'no label', 'email': 'no label', 'phone': 'no label', 'addr_hamle': 'no label', 'name_simpl': 'no label', 'craft': 'no label', 'fee': 'no label', 'access': 'no label', 'source_ref': 'no label', 'attributio': 'no label', 'LINZ_sourc': 'no label', 'LINZ_layer': 'no label', 'direction': 'no label', 'man_made': 'no label', 'name_etymo': 'no label', 'alt_name_c': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'url': 'no label', 'website': 'no label', 'ref_linz_a': 'no label', 'opening_ho': 'no label', 'addr_subur': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'wikipedia': 'no label', 'name_ety_1': 'no label', 'name_en': 'no label', 'diameter': 'no label', 'descriptio': 'no label', 'denotation': 'no label', 'species': 'no label', 'name_cs': 'no label', 'leaf_cycle': 'no label', 'attraction': 'no label', 'is_in': 'no label', 'descript_1': 'no label', 'ref_nz_her': 'no label', 'historic': 'no label', 'wikidata': 'no label', 'waterway': 'no label', 'ref_linz_p': 'no label', 'name_mi': 'no label', 'intermitte': 'no label', 'height': 'no label', 'natural': 'no label', 'name': 'no label', });
lyr_tourism_viewpoint_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'locked': 'no label', 'barrier': 'no label', 'material': 'no label', 'access': 'no label', 'name_etymo': 'no label', 'ruins': 'no label', 'name_cs': 'no label', 'alt_name_e': 'no label', 'alt_name_c': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'opening_ho': 'no label', 'name_fr': 'no label', 'name_de': 'no label', 'image': 'no label', 'website': 'no label', 'name_en': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'name_zh': 'no label', 'historic': 'no label', 'fortificat': 'no label', 'archaeolog': 'no label', 'covered': 'no label', 'level': 'no label', 'designatio': 'no label', 'name_mk': 'no label', 'name_ja': 'no label', 'height': 'no label', 'layer': 'no label', 'noexit': 'no label', 'foot': 'no label', 'direction': 'no label', 'seamark_ty': 'no label', 'seamark_li': 'no label', 'seamark__1': 'no label', 'seamark__2': 'no label', 'seamark__3': 'no label', 'seamark__4': 'no label', 'ref_linz_h': 'no label', 'descriptio': 'no label', 'wheelchair': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'ref_linz_t': 'no label', 'ref_linz_p': 'no label', 'natural': 'no label', 'name_mi': 'no label', 'name': 'no label', 'ele': 'no label', });
lyr_Verena_Tspots_5.set('fieldLabels', {'Titel': 'no label', 'country': 'no label', 'Notiz': 'no label', 'URL': 'no label', 'Lattitude': 'no label', 'Longitude': 'no label', 'Tags': 'no label', 'Kommentar': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_NorthlandRundreise_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid_2': 'no label', 'id_2': 'no label', 'Name_2': 'no label', 'description_2': 'no label', 'timestamp_2': 'no label', 'begin_2': 'no label', 'end_2': 'no label', 'altitudeMode_2': 'no label', 'tessellate_2': 'no label', 'extrude_2': 'no label', 'visibility_2': 'no label', 'drawOrder_2': 'no label', 'icon_2': 'no label', });
lyr_CoromandelNapierneuseeland_2025__route_von_manurewa_auckland_neuseeland_nach_napier_neuseeland_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_NapierMtEgmontneuseeland_2025__route_von_napier_neuseeland_nach_cape_egmont_taranaki_neuseeland_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_StratfordAucklandneuseeland_2025__route_von_stratford_neuseeland_nach_auckland_airport_kiwi_hotel_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});