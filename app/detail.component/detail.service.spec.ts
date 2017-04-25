import { Skladnik } from './../skladnik';
import { Danie } from './../danie';
import { DetailService } from './detail.service';
// import { Http } from '@angular/http';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';



describe('DanieService Tests', () => {

    // let danieService: DanieService;
    // let http: Http;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [{
                provide: Http,
                useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
                    return new Http(mockBackend, options);
                },
                deps: [MockBackend, BaseRequestOptions]
            },
                MockBackend,
                BaseRequestOptions,
                DetailService]
        });
    });


    it('should set id for danie', inject([DetailService], (detailService: DetailService) => {
        // given

        const id = '767';

        // when
        detailService.reciveName(id);
        // then
        expect(detailService.id).toBe('767');
    }));


    it('should get danie', inject([DetailService, MockBackend],
        (detailService: DetailService, mockBackend: MockBackend) => {

            // given
            const mockedResponse: Danie[] = [
                {
                    nazwaTyp: 'Salatka',
                    opisPrzepis: 'wiosenna salatka',
                    czasPrzepis: 123,
                    nazwaDanie: 'Owocowa salatka',
                    idDanie: '12312',
                    opisDanie: 'Jakis opis',
                    zdjecieDanie: '123.png'
                }
            ];

            mockBackend.connections.subscribe((connection: any) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockedResponse)
                })));
            });

            // when
            detailService.getData().subscribe((danies) => {
                // then
                expect(danies.length).toBe(1);
                expect(danies[0].czasPrzepis).toBe(123);
                expect(danies[0].nazwaDanie).toBe('Owocowa salatka');
            });
        }));

    it('should get skladniki', inject([DetailService, MockBackend],
        (detailService: DetailService, mockBackend: MockBackend) => {

            // given
            const mockedResponse: Skladnik[] = [
                {
                    idProdukt: 1,
                    nazwaProdukt: 'Marchewka',
                    ilosc: '3',
                    wartosc: 2
                },
                {
                    idProdukt: 2,
                    nazwaProdukt: 'Cebula',
                    ilosc: '0,5',
                    wartosc: 4
                }
            ];

            mockBackend.connections.subscribe((connection: any) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockedResponse)
                })));
            });

            // when
            detailService.getComponents().subscribe((skladniki) => {
                // then
                expect(skladniki.length).toBe(2);
                expect(skladniki[0].idProdukt).toBe(1);
                expect(skladniki[0].wartosc).toBe(2);
                expect(skladniki[1].nazwaProdukt).toBe('Cebula');
                expect(skladniki[1].ilosc).toBe('0,5');
            });
        }));

});
