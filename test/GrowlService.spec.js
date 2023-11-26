describe('GrowlService', () => {
    let growlService;

    beforeEach(() => {
        growlService = GrowlService();
        document.querySelector('.growlservice-container').innerHTML = '';
    });

    it('should create', () => {
        // then
        expect(growlService).withContext('GrowlService').toBeDefined();
    });

    it('should growl success', () => {
        // given
        const title = 'success';
        const message = 'This is a success message';

        // when
        growlService.success(title, message);

        // then
        expect(document.querySelector('.growlservice-message')).toHaveClass(title);
        expect(document.querySelector('.growlservice-message strong').innerHTML).toEqual(title);
        expect(document.querySelector('.growlservice-message div').innerHTML).toEqual(message);
    });

    it('should growl error', () => {
        // given
        const title = 'error';
        const message = 'This is an error message';

        // when
        growlService.error(title, message);

        // then
        expect(document.querySelector('.growlservice-message')).toHaveClass(title);
        expect(document.querySelector('.growlservice-message strong').innerHTML).toEqual(title);
        expect(document.querySelector('.growlservice-message div').innerHTML).toEqual(message);
    });

    it('should growl warn', () => {
        // given
        const title = 'warning';
        const message = 'This is a warning message';

        // when
        growlService.warning(title, message);

        // then
        expect(document.querySelector('.growlservice-message')).toHaveClass(title);
        expect(document.querySelector('.growlservice-message strong').innerHTML).toEqual(title);
        expect(document.querySelector('.growlservice-message div').innerHTML).toEqual(message);
    });

    it('should growl info', () => {
        // given
        const title = 'info';
        const message = 'This is an info message';

        // when
        growlService.info(title, message);

        // then
        expect(document.querySelector('.growlservice-message')).toHaveClass(title);
        expect(document.querySelector('.growlservice-message strong').innerHTML).toEqual(title);
        expect(document.querySelector('.growlservice-message div').innerHTML).toEqual(message);
    });

    it('should not show growl message anymore', fakeAsync(() => {
        // given
        const title = 'info';
        const message = 'This is an info message';

        // when
        growlService.info(title, message);

        // then
        setTimeout(() => {        
            expect(document.querySelector('.growlservice-message')).toBeFalsy(); 
        }, 5500);
        tick();
    }));
});