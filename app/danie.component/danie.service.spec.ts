import { Danie } from './../danie';
import { DanieService } from './danie.service';
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
                DanieService]
        });
    });


    it('should set a right name', inject([DanieService], (danieService: DanieService) => {
        // given

        const name = 'barszcz';

        // when
        danieService.reciveName(name);
        // then
        expect(danieService.name).toBe('barszcz');
    }));


    it('should get danie', inject([DanieService, MockBackend],
        (danieService: DanieService, mockBackend: MockBackend) => {

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
            danieService.getData().subscribe((danies) => {
                // then
                expect(danies.length).toBe(1);
                expect(danies[0].czasPrzepis).toBe(123);
                expect(danies[0].nazwaDanie).toBe('Owocowa salatka');
            });
        }));

});
